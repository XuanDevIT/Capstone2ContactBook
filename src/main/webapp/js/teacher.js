function showTeacherModal(teacherId, fullName, sex, birthday,
     address, password, classManage, degree, email, phone, photos) {
    $('#teacherId').val(teacherId ? teacherId : '');
    $('#fullName').val(fullName ? fullName : '');
    $('#sex').val(sex ? sex : '');
    $('#birthday').val(birthday ? birthday : '');
    $('#address').val(address ? address : '');
    $('#password').val(password ? password : '');
    $('#classManage').val(classManage ? classManage : '');
    $('#degree').val(degree ? degree : '');
    $('#email').val(email ? email : '');
    $('#phone').val(phone ? phone : '');
    $('#photos').val(photos ? photos : '');
    $('#teacherModal').modal('show');
}

function modalDeleteTeacher(id, name) {
    console.log('log show confirmation dialog')
    console.log(id)
    $('#fullName').text(name);
    $('#confirmDelete').attr('href', 'teacher/delete/' + id);
    $('#confirmDelete').on('click', () => {
		window.location.href = "/teacher";
	})
 /*   $.ajax({
	    url: '/teacher/delete/' + id,
	    type: 'GET',
	    success: function(result) {
	        // Do something with the result
	    }
	}); */
    $('#deleteTeacherModal').modal('hide');
}