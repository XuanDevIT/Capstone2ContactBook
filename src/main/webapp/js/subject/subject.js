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

	
	data.teacherID={"teacherId":selects};
	
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
	var selects = $('#teacherID').val();

	$.each(inputs, (index, val) => {
		val.value = '';
		$(val).removeClass('invalid')
	})
	$('#teacherId').val('');
	
}



//xử ly su kien sava
const save_subject = () => {
	debugger
	insert_subject(getDataFromInfo()).then(rs => {
		console.log('1223');
		//show_data_subject();
	})


	console.log('1223');
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


$(document).ready(function () {
	show_data_subject();

	//button save subject
	$('#save_inforTeacher').on('click', function () {
		debugger
		save_subject();
		$('#subjecModel').modal('hide');
		reset_value_from();
		show_data_subject();
	})


	
})