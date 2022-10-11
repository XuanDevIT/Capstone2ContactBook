import { API } from "../common/api.js"
var command = {}
var app = document.querySelector('body')
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
            CallAPISuject()
            $('#exampleModalLongTitle').text(info.dateStr)
            command.getDate = info.dateStr
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
        var option = {
            url : "/v1/timestudy",
            data : JSON.stringify(getValue())
        }

        API.POST(option).then(rs=>{
            console.log(rs)
        })

        calendar.addEvent({
            title: subject,
            start: date + "T" + fromdate,
            end: date + "T" + toTime
        })
    })
    calendar.render();
    $('.modal-content').on('click', '#add_row', function () {
        $('.modal-body').append(row())
        getValue()
    })

});

//call API suject

const CallAPISuject = () => {

    var option_subject = ""
    var option = {
        url: '/v1/subject'
    }
    API.GET(option).then(rs => {
        command.subject = [...rs]
        return rs;
    }).then(rs=>{
        CallAPITeacher();
    })
}

//call api teacher

const CallAPITeacher = () => {
    var option = {
        url: '/v1/teacher'
    }

    API.GET(option).then(rs => {
       command.dataTeach=[...rs];
    })
}



const getSuject = (rs) => {
    var subject = `
            <option selected>Choose...</option>`;
    for (const key in rs) {
        subject = subject + `<option value = "${rs[key].subjectID} ">${rs[key].subjectName}</option>`
    }
   return subject;

}


const getTeacher = (rs) => {
    var teacher = `
            <option selected>Choose...</option>`;
    for (const key in rs) {
        teacher = teacher + `<option value = "${rs[key].teacherId} ">${rs[key].fullName}</option>`
    }


    return  teacher;
}



$('.modal-body').on('change', '.input_subject', function () {
    var id_subect = Number($(this).val())

    var id_teach = command.subject.find(rs=>rs.subjectID== id_subect)
    //tim vi tri cua row
    var element_parent = $(this).parent().parent();
    var div_teach = element_parent.children(".teach")
    // Tim theo id cua teach chua  class
    var  teach = command.dataTeach.filter(rs=>rs.teacherId == id_teach.teacherID.teacherId)

    div_teach.children().html(getTeacher(teach))

})

const  getValue = ()=>{
    var data ={}
    var el =app.querySelector('.modal-body')
    var elinput = el.querySelectorAll("input")
    var elselecte = el.querySelectorAll('select');

    elinput.forEach(vl=>{
        data = {...data,[vl.name]:vl.value}
    })

    elselecte.forEach(vl=>{

        debugger
        if (vl.value != "Choose..."){

           data = {...data,[vl.name]:{[vl.name]:vl.value}}
        }
    })
 return {["param"]:data};
}

getValue()
const row = (ob) => {
    return `<div class="row mt-1">
                        <div class="col-3">
                            <input type="time" name="timeStudyHourStart" class="form-control" >
                        </div>
                        <div class="col-3">
                            <input type="time" name="timeStudyHourEnd" class="form-control" >
                        </div>

                            <input disabled type="hidden" value="${command.getDate}"  name="timeStudyDay" class="form-control" >

                        <div class="col-2">
                            <select id="input_subject" name="subjectID" class="form-control input_subject">
                               ${getSuject(command.subject)}
                            </select>
                        </div>
                        <div class="col-2 teach" >
                            <select  name="classStudyID" data-live-search="true"  class="form-control input_teacher selectpicker">
                                 <option selected>Choose...</option>
                                   ${ob!=undefined?ob:''}
                            </select>
                        </div>
                        <div class="col-2 d-flex align-items-center">
                            <Button class="btn-danger btn">X</Button>
                        </div>
                    </div>`
}



