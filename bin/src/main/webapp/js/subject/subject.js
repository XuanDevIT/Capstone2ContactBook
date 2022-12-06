import {API} from "../common/api.js";
import {g_common} from "../common/common.js";
var command = {}
//lay gia tri tu form
const getDataFromInfo = () => {
	debugger
	var data = {};
	var element = $('#inforSubject')

	var inputs = element.children().children('input');
	var selects = $('#teacherId').val();


	$.each(inputs, (index, val) => {
		data = { ...data, [val.name]: val.value }
	})
	console.log(data);
	debugger;

	
	data.teacherId={"teacherId":selects};
	
	console.log(data);
	

	debugger;



	// if (data.studentId == '') {
	// 	delete data.studentId;
	// }
	return data;

}


//reset gia tri trong form
const reset_value_from = () => {
	var element = $('#inforSubject')

	var inputs = element.children().children('input');
	var selects = $('#teacherId').val();

	$.each(inputs, (index, val) => {
		val.value = '';
		$(val).removeClass('invalid')
	})
	$('#teacherId').val('');
	
}



//xử ly su kien sava
const save_subject = () => {
	debugger
	var data ={};
	data.subjectId = $('#subjectId').val();
	data.teacherId = $('#teacherId').val();
	
	subSave_teach_subject(data).then(rs => {
		console.log('1223');
		//show_data_subject();
	})


	console.log('tesssssssst');
}

const show_data_subject = () => {
	var appen_data = $('#show_data')

	var html;
	findAll_subject().then(rs => {
		rs.forEach(row => {
			html = html + item_tr_data_subject(row)
		})
		appen_data.html(html);
	})
}

const item_tr_data_subject = (ob) => {
	return `<tr>
		<td class="teacher-name">${ob.subjectName}</td>
		<td class="subject-id">${ob.teacherId}</td>
		
		<td>
			<a href="#addEmployeeModal" class="edit" data-toggle="modal"><i
					class="material-icons ">&#xE254;</i></a>

			<a href="#deleteEmployeeModal" class="material-icons delete_student"
				data-toggle="modal"><i class="material-icons">&#xE15C;</i> </a>
		</td>
	</tr>`
}

const CallAPISuject = () => {

	
	var option_subject = ""
	var option = {
		url: '/v1/subject'
	}
	API.GET(option).then(rs => {
		debugger;
		getSuject(rs)
	})
}

const CallAPIteacher = () => {
	debugger;
	var option_subject = ""
	var option = {
		url: '/v1/teacher'
	}
	API.GET(option).then(rs => {
		// command.subject = [...rs]
		debugger;
		getTeacher(rs)
	})
}

const getSuject = (rs) => {
	debugger;
	var subject = `
			<option selected>Choose...</option>`;
	for (const key in rs) {
		subject = subject + `<option value = "${rs[key].subjectId}">${rs[key].subjectName}</option>`
	}

	var subject_child= $('#subjectId')
	subject_child.html(subject)
}


const getTeacher = (rs) => {
	debugger
	var teacher = `
			<option selected>Choose...</option>`;
	for (const key in rs) {
		teacher = teacher + `<option value = "${rs[key].teacherId}">${rs[key].fullname}</option>`
	}
	

	var teacher_child= $('#teacherId');
	teacher_child.html(teacher);
	
}



$(document).ready(function () {

	show_data_subject();
	CallAPISuject();
	CallAPIteacher();
	//button save subject
	$('#save_inforTeacher').on('click', function () {
		debugger
		save_subject();
		$('#subjecModel').modal('hide');
		reset_value_from();
		show_data_subject();
	})
	
})