function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

$(function() {
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
                alert('Thêm giáo viên thành công');
                $('.modal-backdrop').remove();
            },
            error: function() {
                $('.modal-backdrop').remove();
                alert('Error');
            }
        });
    });
});

$(function() {
    $('#save_subject').on('click', function(e) {
        e.preventDefault();
        let formData = getFormData($("#subject_form"));
        data = JSON.stringify(formData)
        $.ajax({
            type: "POST",
            url: "/v1/subject",
            data: data,
            contentType: "application/json; charset=UTF-8",
            success: function(response) {
                popup_cancel('#subjectModal');
                $('.modal-backdrop').remove();
                alert('Thêm môn học thành công');
            },
            error: function() {
                $('.modal-backdrop').remove();
                alert('Error');
            }
        });
        return false;
    });

    $('#save-class-study').on('click', function(e) {
        e.preventDefault();
        console.log('save class study');
        let formData = getFormData($("#class_study_form"));
        data = JSON.stringify(formData);
        $.ajax({
            type: "POST",
            url: "/v1/add/classstudy",
            data: data,
            contentType: "application/json; charset=UTF-8",
            success: function(response) {
                popup_cancel('#classModal');
                $('.modal-backdrop').remove();
                alert('Thêm lớp thành công');
            },
            error: function() {
                $('.modal-backdrop').remove();
                alert('Error');
            }
        });
        return false;
    })

    // search teacher by id
    $('#search-teacher').on('click', function(e) {
        let teacherId = $('#teacherId-in-class').val();
        getTeacherById(teacherId).then( function(val) {
            $('#teacher-name').text(val.fullname)
            console.log(val);
        })
        .catch(function(eror) {
            alert('None teacher with id ' + teacherId);
        })
    })

    $('#search-subject').on('click', function(e) {
        let subjectId = $('#subjectId-in-class').val();
        getSubjectById(subjectId).then( function(val) {
            $('#subject-name').text(val.subjectName)
            console.log(val);
        })
        .catch(function(eror) {
            alert('None subject found with id ' + teacherId);
        })
    })

    $('#search-student-class').on('click', function(e) {
        let studentId = $('#studentIdSaveToClass').val();
        getStudentById(studentId).then( function(val) {
            $('#student-name').text(val.fullname)
            console.log(val);
        })
        .catch(function(eror) {
            alert('None subject found with id ' + teacherId);
        })
    })

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
                alert('add student success');
                $('.modal-backdrop').remove();
            },
            error: function() {
                alert('Error');
            }
        });
        return false;
    })
});

/* ========================  toggle class css  ====================== */
$(function() {

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
});

$(function() {
    console.log("get subjects");
    $.ajax({
        type: "GET",
        url: "/v1/subject",
        success: function(response) {
            console.log('get subject success');
            show_data_subject(response);
        },
        error: function() {
            console.log('show subject info error');
        }
    });
});

$(function() {
    console.log("get class study");
    $.ajax({
        type: "GET",
        url: "/v1/classstudy/getall",
        success: function(response) {
            console.log('get class study success');
            show_data_class(response);
        },
        error: function() {
            console.log('get class study error');
        }
    });
});

const show_data_subject = (data) => {
	var append_data = $('#show_data_subject')
    var htmlSubject = '';
    data.forEach(item =>  {
        htmlSubject += item_tr_data_subject(item);
    });
    append_data.html(htmlSubject);
}

const show_data_idclass_ob = (data) => {
    var append_data = $('#header-class-mng')
    var htmlInfo =  view_class_study(data);
    append_data.html(htmlInfo);
}

const show_data_class = (data) => {
	var append_data = $('#show_data_class')
    var htmlClass = '';
    data.forEach(item =>  {
        htmlClass += item_tr_data_class(item);
    });
    append_data.html(htmlClass);
}

const show_list_student = (data) => {
    console.log(data);
    var append_data = $('#content-list-student');
    var htmlClass = '';
    data.forEach(item => {
        htmlClass += item_data_student(item);
    })
    append_data.html(htmlClass)
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

const item_tr_data_subject = (ob) => {
	return `
        <tr>
            <td >${ob.subjectName}</td>
            <td>
                <a href="#subjectModal" data-name=${ob.subjectId} data-id=${ob.subjectName} class="edit-subject"
                    data-toggle="modal">
                    <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <a href="#deleteEmployeeModal" data-student_id=${ob.subjectId}  class="material-icons delete_student" style="color: red;" data-toggle="modal">
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </a>
            </td>
        </tr>`
}

$(document).on("click", ".item-class", function() {
    var clickedBtnID = $(this).attr('id');
    console.log(` id class : ${clickedBtnID}` );
    $('.content-class').removeClass('d-none')

    getListClassStudyById(clickedBtnID).then( function(val) {
        show_data_idclass_ob(val)
        $('#main-administrator').addClass('d-none');

        // $('#subject-name').text(val.subjectName)
        // console.log(val);
    })
    .catch(function(eror) {
        alert('None subject found with id ' + teacherId);
    })
    getListStudentByClassStudyId(clickedBtnID)
        .then(function(studentList) {
            show_list_student(studentList)
        })
})

$(document).on('click', '#AddSTDClassModal' , function() {
    var classStudyId = $(this).data('id');
    $("#classStudyId-val").val( classStudyId );
})

const view_class_study = (ob) => {
    return `
        <div class="header-class">
            <h3>${ob.className}</h3>
        </div>
        <button data-id="${ob.classStudyId}" type="button" class="btn btn-success" id="AddSTDClassModal" data-toggle="modal" data-target="#AddStudentToClassModal">
            Add Student
        </button>
        <button id='btn-redirect-attendance' data-id="${ob.classStudyId}">
            Attendance
        </button>
        <div class="footer-class">
            <div>${ob.fullname}</div>
            <div>${ob.subjectName}</div>
        </div>
    `
}

const item_tr_data_class = (ob) => {
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
                <a href="#subjectModal" data-ob=${ob.subjectId}  class="material-icons delete_student" style="color: red;" data-toggle="modal">
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </a>
            </td>
        </tr>`
}

const item_data_student = (ob) => {
   return  `
    <tr>
        <td>${ob.studentId}</td>
        <td>${ob.studentName}</td>
        <td>
            <a href="#addEmployeeModal" data-student_id=${ob.studentId} class="edit"
                data-toggle="modal">
                <i class="fa-solid fa-pen-to-square"></i>
            </a>
            <a href="#deleteEmployeeModal" data-student_id=${ob.studentId}  class="material-icons delete_student"
             style="color: red;" data-toggle="modal">
                <i class="fa-sharp fa-solid fa-trash"></i>
            </a>
        </td>
    </tr>
    `
}

const popup_cancel = (modalId) => {
    var element = $(`${modalId}`)
    element.removeClass('show');
    element.css("display", "none")
}

$(function() {
    $('#toggleClassManage').on('click', function(e) {
        toggleClassAdm_classMng();
    });
});

const toggleClassAdm_classMng= () => {
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

const getTeacherById = (id) => {
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

const getSubjectById = (id) => {
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

const getStudentById = (id) => {
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

const getListStudentByClassStudyId = (id) => {
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

const getListClassStudyById = (id) => {
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

const getListClassStudy = () => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/classstudy',
            success: function(response) {
                resolve(response)
            },
            error: function() {
                console.log('show get list class study info error');
            }
        })
    })
}
