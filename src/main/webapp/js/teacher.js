function showTeacherModal(modal) {
    var elementModal = document.querySelector('#'  +modal);
    var inputs = document.querySelectorAll("input");
    inputs.forEach(value => {
        if ($(value).attr('type') != 'button'){
            $(value).val('')
        }
    })
    $('#'+modal).modal('show');
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