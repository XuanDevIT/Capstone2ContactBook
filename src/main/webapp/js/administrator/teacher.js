//lay gia tri tu form
const getDataFromInfo = () => {
	debugger
	var data = {};
	var element = $('#inforStudent')

	var inputs = element.children().children('input');

	$.each(inputs, (index, val) => {
		data = { ...data, [val.name]: val.value }
	})
	if (data.studentId == '') {
		delete data.studentId;
	}
	return data;

}
//lay gia tri tu form
const getDataFromInfo1 = (ob) => {
	debugger
	var data = {};
	var element = document.querySelector('#'+ob)

	var inputs = element.querySelectorAll('input')

	$.each(inputs, (index, val) => {
		data = { ...data, [val.name]: val.value }
	})
	if (data.studentId == '') {
		delete data.studentId;
	}
	return data;

}
//reset gia tri trong form
const reset_value_from = () => {
	var element = $('#inforStudent')

	var inputs = element.children().children('input');

	$.each(inputs, (index, val) => {
		val.value = '';
		$(val).removeClass('invalid')
	})
}

//gan gia tri cho form
const setDataFromInfo = (data_rs) => {
	debugger;
	var keys = Object.keys(data_rs);
	var element = $('#inforStudent')

	var inputs = element.children().children('input');
	$.each(inputs, (index, val) => {
		keys.forEach(key => {
			if (val.name == key) {
				val.value = data_rs[key];
				return false;
			}
		})
	})

}

//show dialog va set du lieu cho dialog
const popup_edit_show = (id) => {
	handler_findByID(id).then(rs => setDataFromInfo(rs))
	popup_cancel();
}

//xu ly button save cua dialog
const popup_save = () => {
	handler_insert_student(getDataFromInfo()).then(rs => {
		debugger
		show_data_student();
		popup_cancel();
	})
}

const popup_cancel = () => {
	var element = $('#addEmployeeModal')
	var element2 = $('#deleteEmployeeModal')
	element.removeClass('show');
	element.css("display", "none")
	element2.removeClass('show');
	element2.css("display", "none")
	$('body').removeClass('modal-open')
	$('.modal-backdrop').remove()

}

const item_tr_data_student = (ob) => {
	return `
					<tr >
							<!-- <td>
								<span class="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1">
									<label for="checkbox1"></label>
								</span>
							</td> -->
							<td >${ob.fullName}</td>
							<td >${ob.birthDay}</td>
							<td >${ob.phone}</td>
							<td >${ob.classStudent}</td>

							<td>


								<a href="#addEmployeeModal" data-student_id=${ob.studentId} class="edit" onclick="showTeacherModal()
									data-toggle="modal"><i class="material-icons ">&#xE254;</i></a>

								<a href="#deleteEmployeeModal" data-student_id=${ob.studentId}  class="material-icons delete_student" data-toggle="modal"><i
										class="material-icons">&#xE15C;</i> </a>
							</td>
						</tr>`
}

const show_data_student = () => {
	var appen_data = $('#data_student')

	var html ;
	handler_show_data_student().then(rs => {
		rs.forEach(row =>{
			html = html + item_tr_data_student(row)
		})
		appen_data.html(html);
	})
}


//su kienej
$(document).ready(function () {
	show_data_student()
	//event save onclick
	$('#save_inforTeacher').on('click', function () {
		debugger
		var check = result_validate();
		if (check == true) {
			popup_save();
		}

	})

	//event edit onclick
	$('#data_student').on('click', '.edit',function () {
		debugger
		var id = $(this).attr('data-student_id')

		popup_edit_show(Number(id));
	})



	//reset gia tri form(add)
	$('#showPopup_save').on('click', () => {
		reset_value_from();
	})





	$('#data_student').on('click', '.delete_student',function () {
		debugger
		var id = $(this).attr('data-student_id')
		$('#confirm_delete').on('click', () => {

			handler_delete_student(id).then(rs => {
				show_data_student();
				popup_cancel();
			})

		})
	})

	var element = $('#inforStudent')
	var inputs = element.children().children('input');
	function handlekeyup() {
		var value = $(this).val();
		if (value == "") {
			$(this).addClass('is-invalid')
			return false;
		}

		if ($(this).attr('name') == 'phone') {
			if (validatePhone(value) != true) {
				$(this).addClass('is-invalid')
				return false;
			}
		}

		if ($(this).attr('type') == 'date') {
			date_cr = parseDate($.datepicker.formatDate('yy/mm/dd', new Date()))
			var bd = parseDate(value);
			if (date_cr < bd) {
				$(this).addClass('is-invalid')
				check = false;
				return;
			}
		}



		$(this).removeClass('is-invalid');
	}

	var check_blur = true;

	function handleBlur() {
		var check_blur = true;
		var type = $(this).attr('type')
		if (type == 'date') {
			date_cr = parseDate($.datepicker.formatDate('yy/mm/dd', new Date()))
			var bd = parseDate(this.value);
			if (date_cr < bd) {
				$(this).addClass('is-invalid')
				check_blur = false;
			}
		}

		var value = $(this).val();
		if (value == "") {
			$(this).addClass('is-invalid')
			check_blur = false;
		}
		debugger
		if ($(this).attr('name') == 'phone') {
			if (validatePhone(value) != true) {
				$(this).addClass('is-invalid')
				check_blur = false;
			}
		}

		if (check_blur == true) {
			$(this).removeClass('is-invalid')
			check_blur = true;
		}

		return check_blur;

	}

	inputs.blur(handleBlur)
	inputs.keyup(handlekeyup)


	const result_validate = () => {
		var check = validateFromInfo();
		if (check_blur == false || check == false) {
			return false;
		}
		return true;
	}
})