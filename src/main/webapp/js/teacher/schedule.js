import { API } from "../common/api.js"
var command = {}
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            center: 'addEventButton'
        },
        height: '100%',
        expandRows: true,
        slotMinTime: '07:00',
        slotMaxTime: '21:00',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialDate: '2022-09-01',

        events: [
            {
                title: 'Toan',
                start: '2022-09-29T10:30:00',
                end: '2022-09-29T11:30:00',
                extendedProps: {
                    department: 'BioChemistry'
                },
                description: 'Lecture'
            }
        ],
        dateClick: function (info) {

            info.dayEl.style.backgroundColor = 'red';
            $('.modal-body').empty()
            $('#Modal').modal('show');
            $('#exampleModalLongTitle').text(info.dateStr)
        },

        // customButtons: {
        //     addEventButton: {
        //         text: 'add event...',

        //         click: function () {
        //             var dateStr = prompt('Enter a date in YYYY-MM-DD format');
        //             var date = new Date(dateStr + 'T00:00:00'); // will be in local time

        //             if (!isNaN(date.valueOf())) { // valid?
        //                 calendar.addEvent({
        //                     title: 'dynamic event',
        //                     start: date,
        //                     allDay: true
        //                 });
        //                 alert('Great. Now, update your database...');
        //             } else {
        //                 alert('Invalid date.');
        //             }
        //         }
        //     }
        // },
    });



    $('#save').on("click", function () {
        debugger
        var fromdate = $('input[name="fromTime"]').val()
        var toTime = $('input[name="toTime"]').val()
        var date = $('input[name="date"]').val()
        var teacher = $('select[name="teacher"]').val()
        var subject = $('select[name="subject"]').val()
        calendar.addEvent({
            title: subject,
            start: date + "T" + fromdate,
            end: date + "T" + toTime
        })
    })
    calendar.render();
    $('.modal-content').on('click', '#add_row', function () {

        CallAPISuject();
        $('.modal-body').append(row())
    })

});

//call API suject

const CallAPISuject = () => {

    var option_subject = ""
    var option = {
        url: '/v1/subject'
    }
    API.GET(option).then(rs => {
        getSuject(rs);
    })
}

//call api teacher

const CallAPITeacher = (id,el) => {
    var option = {
        url: '/v1/teacher',
        id: id
    }

    API.GET(option).then(rs => {
        getTeacher(rs);
        var selected_teacher = $(el).parent().parent().parent();
        selected_teacher = selected_teacher.children();
        selected_teacher.children('.input_teacher').html(command.teacher);
    })
}



const getSuject = (rs) => {
    var subject = `
            <option selected>Choose...</option>`;
    for (const key in rs) {
        subject = subject + `<option value = "${rs[key].subjectID} ">${rs[key].subjectName}</option>`
    }
    command.subject = subject;

}


const getTeacher = (rs) => {
    var teacher = `
            <option selected>Choose...</option>`;

    teacher = teacher + `<option value = "${rs.teacherId} ">${rs.fullName}</option>`

    command.teacher = teacher;
}



$('.modal-body').on('change', '.input_subject', function () {
    var id = Number($(this).val())
    CallAPITeacher(id, this);

})

console.log(CallAPISuject(getSuject));

const row = (ob) => {
    return `<div class="row mt-1">
                        <div class="col-3">
                            <input type="time" name="fromTime" class="form-control" >
                        </div>
                        <div class="col-3">
                            <input type="time" name="toTime" class="form-control" >
                        </div>

                            <input disabled type="hidden"  name="date" class="form-control" >

                        <div class="col-2">
                            <select id="input_subject" name="subject" class="form-control input_subject">
                            ${command.subject}
                            </select>
                        </div>
                        <div class="col-2">
                            <select  name="teacher" data-live-search="true" class="form-control input_teacher selectpicker">
                                 <option selected>Choose...</option>
                                   
                            </select>
                        </div>
                        <div class="col-2 d-flex align-items-center">
                            <Button class="btn-danger btn">X</Button>
                        </div>
                    </div>`
}



