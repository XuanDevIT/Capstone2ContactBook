$(function() {

    saveTeacher()

    saveSubject()

    saveClassStudy()

    searchTeacherById()

    searchSubject()

    searchStudentClass()

    saveStudentToClass()

    toggleRedirectView()

    getListSubject()

    getListClassStudy()

    showDataTeacher()

    deleteSubject()

    deleteTeacher()

    clickItemClass()

    onClickBackButton()

    onClickDeleteSubjectModal()

    onClickDeleteTeacherModal()

    passDataTeacherModalEdit()

    setValueForSubjectSelect()

    passDataSubjectModal()

    setValueForTeacherSelect()

});

var saveTeacher = () => {
    $('#save_inforTeacher').on('click', function(e) {
        e.preventDefault();
        let formData = getFormData($("#teacher_form"));
        formData.username = getUserName(formData.fullname);
        $.ajax({
            type: "POST",
            url: "/v1/teacher/add",
            data: formData,
            success: function(response) {
                popup_cancel('#teacherModal');
                alert('Save teacher success');
                showDataTeacher()
            },
            error: function() {
                alert('Error');
            }
        });
    });
}

var saveSubject = () => {
    $('#save_subject').on('click', function(e) {
        e.preventDefault();
        let formData = getFormData($("#subject_form"));
        data = JSON.stringify   (formData)
        $.ajax({
            type: "POST",
            url: "/v1/subject",
            data: data,
            contentType: "application/json; charset=UTF-8",
            success: function(response) {
                popup_cancel('#subjectModal');
                getListSubject();
                alert('Save subject success');
            },
            error: function() {
                alert('Error');
            }
        });
    });
}

var saveClassStudy = () => {
    $('#save-class-study').on('click', function(e) {
        e.preventDefault();
        let formData = getFormData($("#class_study_form"));
        console.log(formData);
        data = JSON.stringify(formData);
        console.log(data);
        $.ajax({
            type: "POST",
            url: "/v1/add/classstudy",
            data: data,
            contentType: "application/json; charset=UTF-8",
            success: function(response) {
                popup_cancel('#classModal');
                getListClassStudy();
                alert('Save class study success');
            },
            error: function() {
                alert('Error');
            }
        });
        return false;
    })
}

var searchTeacherById= () => {
    $('#search-teacher').on('click', function(e) {
        let teacherId = $('#teacherId-in-class').val();
        getTeacherById(teacherId).then( function(val) {
            $('#teacher-name').text(val.fullname)
        })
        .catch(function(eror) {
            alert('None teacher with id ' + teacherId);
        })
    })
}

var searchSubject = () => {
    $('#search-subject').on('click', function(e) {
        let subjectId = $('#subjectId-in-class').val();
        getSubjectById(subjectId).then( function(val) {
            $('#subject-name').text(val.subjectName)
        })
        .catch(function(eror) {
            alert('None subject found with id ' + teacherId);
        })
    })
}

var searchStudentClass = () => {
    $('#search-student-class').on('click', function(e) {
        let studentId = $('#studentIdSaveToClass').val();
        getStudentById(studentId).then( function(val) {
            $('#student-name').text(val.fullname)
        })
        .catch(function(eror) {
            alert('None subject found with id ' + teacherId);
        })
    })
}

var saveStudentToClass = () => {
    $('#save-student-to-class').on('click', function(e) {
        e.preventDefault();
        let formData = getFormData($("#add-student-to-class-form"));
        data = JSON.stringify(formData);
        $.ajax({
            type: "POST",
            url: "/v1/scs/add",
            data: data,
            contentType: "application/json; charset=UTF-8",
            success: function(response) {
                popup_cancel('#AddStudentToClassModal');
                renderListStudentByClassStudyId(localStorage.getItem('classStudyId'))
                alert('add student success');
            },
            error: function() {
                alert('Error');
            }
        });
        return false;
    })
}

/* ========================  toggle class css  ====================== */
var toggleRedirectView = () => {
    $('#show-teacher-list').on('click', function(e) {
        $('#show-teacher-list').removeClass('btn-secondary');
        $('#show-teacher-list').addClass('btn-primary');
        $('#show-subject-list').removeClass('btn-primary');
        $('#show-classStudy-list').removeClass('btn-primary');
        $('#show-subject-list').addClass('btn-secondary');
        $('#show-classStudy-list').addClass('btn-secondary');

        $('#table-teacher').removeClass('d-none');
        $('#table-subject').addClass('d-none');
        $('#table-classStudy').addClass('d-none');
    });

    $('#show-subject-list').on('click', function(e) {

        $('#show-subject-list').addClass('btn-primary');
        $('#show-subject-list').removeClass('btn-secondary');

        $('#show-teacher-list').removeClass('btn-primary');
        $('#show-teacher-list').addClass('btn-secondary');
        $('#show-classStudy-list').removeClass('btn-primary');
        $('#show-classStudy-list').addClass('btn-secondary');


        $('#table-subject').removeClass('d-none');
        $('#table-teacher').addClass('d-none');
        $('#table-classStudy').addClass('d-none');
    });

    $('#show-classStudy-list').on('click', function(e) {

        $('#show-classStudy-list').removeClass('btn-secondary');
        $('#show-classStudy-list').addClass('btn-primary');

        $('#show-subject-list').addClass('btn-secondary');
        $('#show-subject-list').removeClass('btn-primary');
        $('#show-teacher-list').addClass('btn-secondary');
        $('#show-teacher-list').removeClass('btn-primary');

        $('#table-teacher').addClass('d-none');
        $('#table-subject').addClass('d-none');
        $('#table-classStudy').removeClass('d-none');
    });
}

var getListSubject = () => {
    $.ajax({
        type: "GET",
        url: "/v1/subject",
        success: function(response) {
            show_data_subject(response);
        },
        error: function() {
            alert("get subject Error !!!")
        }
    });
}

var getListClassStudy = () => {
    $.ajax({
        type: "GET",
        url: "/v1/classstudy/getall",
        success: function(response) {
            show_data_class(response);
        },
        error: function() {
            alert("get class study error")
        }
    });
}

var setValueForSubjectSelect = () => {
    getSubject().then(function(response) {
       response.forEach(element => {
        $('#subject').append(
            `
                <option value='${element.subjectId}'>${element.subjectName}</option>
            `
        )
       })
    })
}

var setValueForTeacherSelect = () => {
    getTeacherApi().then(function(response) {
       response.forEach(element => {
        $('#teacherName').append(
            `
                <option value='${element.teacherId}'>${element.fullname}</option>
            `
        )
       })
    })
}

const getSubject = () => {
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "GET",
			url: "/v1/subject",
			success: function (response) {
				resolve(response);
			},
			error: function () {
				alert("get list time study error");
			},
		});
	});
};

var show_data_subject = (data) => {
	var append_data = $('#show_data_subject')
    append_data.empty();
    var htmlSubject = '';
    data.forEach(item =>  {
        htmlSubject += item_tr_data_subject(item);
    });
    append_data.html(htmlSubject);
}

var show_data_idclass_ob = (data) => {
    var append_data = $('#header-class-mng')
    append_data.empty();
    var htmlInfo =  view_class_study(data);
    append_data.html(htmlInfo);


}

var show_data_class = (data) => {
	var append_data = $('#show_data_class')
    append_data.empty();
    var htmlClass = '';
    data.forEach(item =>  {
        htmlClass += item_tr_data_class(item);
    });
    append_data.html(htmlClass);
}

var show_list_student = (data) => {
    var append_data = $('#content-list-student');
    append_data.empty();
    var htmlClass = '';
    data.forEach(item => {
        htmlClass += item_data_student(item);
    })
    append_data.html(htmlClass)
    append_data.append(buttonBackHtml);
}

const buttonBackHtml = () => {
    return `
        <button type="button" id="backToDashBoard" class="btn btn-secondary"><< Back</button>
    `
}

var onClickBackButton = () => {
    $(document).on('click', '#backToDashBoard', function() {
        $('.content-class').addClass('d-none')
        $('#main-administrator').removeClass('d-none');
        $('#class-manage-mng').hide();
        localStorage.removeItem('classStudyId')
    })
}

function showTeacherModal(modal) {
    var inputs = document.querySelectorAll("input");
    inputs.forEach(value => {
        if ($(value).attr('type') != 'button'){
            $(value).val('')
        }
    })
    $('#'+modal).modal('show');
}

var item_tr_data_subject = (ob) => {
	return `
        <tr>
            <td >${ob.subjectName}</td>
            <td>
                <a href="#subjectModal" id="btn_update_subject" data-name=${ob.subjectId} data-id=${ob.subjectId} class="edit-subject"
                    data-toggle="modal">
                    <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <a href="#deleteSubjectModal" id="idDeleteSubjectModal" data-id=${ob.subjectId}  class="material-icons delete_student" style="color: red;" data-toggle="modal">
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </a>
            </td>
        </tr>`
}

var clickItemClass = () => {
    $(document).on("click", ".item-class", function() {
        localStorage.setItem('classStudyId', $(this).attr('id'))
        $('#class-manage-mng').show()
        $('.content-class').removeClass('d-none')

        getListClassStudyById(localStorage.getItem('classStudyId')).then( function(val) {
            show_data_idclass_ob(val)
            $('#main-administrator').addClass('d-none');
        })
        .catch(function(eror) {
            alert('None subject found with id ' + teacherId);
        })
        // getListStudentByClassStudyId(localStorage.getItem('classStudyId'))
        //     .then(function(studentList) {
        //         show_list_student(studentList)
        //     })
            renderListStudentByClassStudyId(localStorage.getItem('classStudyId'))
    })
}

var renderListStudentByClassStudyId = (id) => {
    getListStudentByClassStudyId(id)
    .then(function(studentList) {
        show_list_student(studentList)
    })
}

var onClickDeleteSubjectModal = () => {
    $(document).on('click', '#idDeleteSubjectModal' , function() {
        var subjectId = $(this).data('id');
        $("#confirm_delete_subject").val( subjectId );
    })
}

var onClickDeleteTeacherModal = () => {
    $(document).on('click', '#idDeleteTeacherModal' , function() {
        var teacherId = $(this).data('id');
        $("#confirm_delete_teacher").val( teacherId );
    })
}

var view_class_study = (ob) => {
    return `
        <div class="header-class">
            <h3>${ob.className}</h3>
        </div>
        <button data-id="${ob.classStudyId}" type="button" class="btn btn-success" id="AddSTDClassModal" data-toggle="modal" data-target="#AddStudentToClassModal">
            Add Student
        </button>
        <div class="footer-class">
            <div>${ob.fullname}</div>
            <div>${ob.subjectName}</div>
        </div>
    `
}

var item_tr_data_class = (ob) => {
	return `
        <tr>
            <td></td>
            <td>
                <a class="pointer item-class" id=${ob.classStudyId}>${ob.className}</a>
            </td>
            <td >${ob.subjectName}</td>
            <td >${ob.fullname}</td>
            <td>
                <a href="#addEmployeeModal" data-ob=${ob} class="edit"
                    data-toggle="modal">
                    <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <a href="#deleteClass" data-id=${ob.subjectId} id="subjectDelete"  class="material-icons delete_student" style="color: red;" data-toggle="modal">
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </a>
            </td>
        </tr>`
}

var item_data_student = (ob) => {
   return  `
    <tr>
        <td>${ob.studentId}</td>
        <td>${ob.studentName}</td>
        <td>
            <a href="#deleteEmployeeModal" id="remove-student-from-class" data-id=${ob.studentId}  class="material-icons delete_student"
             style="color: red;" data-toggle="modal">
                <i class="fa-sharp fa-solid fa-trash"></i>
            </a>
        </td>
    </tr>
    `
}

var passDataSubjectModal = () => {
    $(document).on("click", "#btn_update_subject", function() {
        getSubjectById($(this).data('id')).then(function(val) {
            $('#subjectId').val(val.subjectId);
            $('#subjectName').val(val.subjectName);
        })
    })
}

$(document).on('click', '#AddSTDClassModal' , function() {
    var classStudyId = $(this).data('id');
    $("#classStudyId-val").val( classStudyId );
})


var deleteSubject = () => {
   $(function() {
    $('#confirm_delete_subject').on('click', function(e) {
        e.preventDefault()
        deleteSubjectById($(this).val());
    })
   })
}

var deleteStudentFromClass = () => {
    $('#confirm_remove_student').on('click', function(e) {
        e.preventDefault()
        // 20221215
    })
}

var deleteTeacher = () => {
    $(function() {
        $('#confirm_delete_teacher').on('click', function(e) {
            e.preventDefault();
            deleteTeacherById($(this).val())
        })
    })
}

var popup_cancel = (modalId) => {
    var element = $(`${modalId}`)
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open')
    element.removeClass('show');
    element.css("display", "none")
}

$(function() {
    $('#toggleClassManage').on('click', function(e) {
        toggleClassAdm_classMng();
    });
});

var toggleClassAdm_classMng= () => {
    // alert('toggle class')
    $('#main-administrator').toggleClass('d-none')
    $('#class-manage').toggleClass('d-none')
}

function getUserName(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư

    str = str.replace(/ + /g," ");
    str = str.replace(/\s/g, '');
    str = str.trim();

    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}

var deleteSubjectById = (subjectId) => {
		$.ajax({
			method: "DELETE",
			url: "/v1/subject/" + subjectId,
			success: function (response) {
                popup_cancel('#deleteSubjectModal')
                getListSubject()
			},
			error: function () {
				alert("Delete subject error");
			},
		});
};

var deleteTeacherById = (teacherId) => {
    $.ajax({
        method: "DELETE",
        url: "/v1/teacher/" + teacherId,
        success: function (response) {
            console.log('delete teacher success');
            popup_cancel('#deleteTeacherModal')
            showDataTeacher()
        },
        error: function () {
            alert("Delete teacher error");
        },
    });
}

var getTeacherById = (id) => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/teacher/'+id,
            success: function(response) {
                resolve(response)
            },
            error: function() {
                console.log('show get teacher by id info error' + id);
            }
        })
    })
}

var getSubjectById = (id) => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/subject/'+id,
            success: function(response) {
                resolve(response)
            },
            error: function() {
                console.log('show get subject by id info error' + id);
            }
        })
    })
}

var getStudentById = (id) => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/student/'+id,
            success: function(response) {
                resolve(response)
            },
            error: function() {
                console.log('search student By id error' + id);
            }
        })
    })
}

var getListStudentByClassStudyId = (id) => {
    return new Promise(function(resolve,reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/getStudentByClass/' + id,
            contentType: 'application/json',
            success: function(response) {
                resolve(response)
            },
            error: function() {
                alert("get list student by class id faillll")
            }
        })
    })
}

var getListClassStudyById = (id) => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/classstudyid/' + id,
            success: function(response) {
                resolve(response)
                console.log("get class study by id success");
            },
            error: function() {
                console.log('get class study by id failllll');
            }
        })
    })
}

var showDataTeacher = () => {
    getTeacherApi().then(function(response) {
        $('#show_data').empty()
        response.forEach(element => {
            $('#show_data').append(itemTeacher(element));
        })
    })
}

var getTeacherApi = () => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/teacher/',
            success: function(response) {
                resolve(response)
            },
            error: function() {
                alert('get class study by id failllll');
            }
        })
    })
}

var itemTeacher = (ob) => {
    return `
                 <tr >
                    <td >${ob.fullname}</td>
                    <td> ${ob.sex} </td>
                    <td>${ob.address} </td>
                    <td>${ob.email} </td>
                    <td>${ob.phone} </td>
                    <td>
                        <a href="#teacherModal" class="btn btn-primary btn-sm btn-crud" data-id=${ob.teacherId} data-toggle="modal" id="btn_update_teacher">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="#deleteTeacherModal" class="material-icons delete_student" id="idDeleteTeacherModal" data-id=${ob.teacherId} data-toggle="modal"
                            data-target="#deleteTeacherModal" style="color: red;">
                            <i class="fa-sharp fa-solid fa-trash"></i>
                        </a>
                    </td>
                </tr>
            `
}

var passDataTeacherModalEdit = () => {
    $(document).on("click", "#btn_update_teacher", function() {
        getTeacherById($(this).data('id')).then(function(val) {
            $.each(inputList(), (index, value) => {
                let mapObject = new Map(Object.entries(val))
                $(value).val(mapObject.get(value.name))
            })
        })
    })
}

var inputList = () => {
    var listDom = document.querySelector('#teacher_form').querySelectorAll('input');
    console.log(listDom);
    return listDom
}



function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}