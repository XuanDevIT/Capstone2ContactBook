import {API} from "../common/api.js"
import {g_common} from "../common/common.js";

var command = {}
var app = document.querySelector('body')



document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    //CallAPISuject()
    CallAPIClassStudy();
    var calendar = new FullCalendar.Calendar(calendarEl, {
        "initialView": 'dayGridMonth',
        headerToolbar: {
            center: 'addEventButton'
        },
        height: '100%',
        expandRows: true,
        slotMinTime: '06:00',
        slotMaxTime: '23:00',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialDate: new Date().toJSON().slice(0,10),
        eventSources: [

            // your event source
            {
                url: '/v1/calendar',
                type: 'get',

                error: function() {
                    alert('there was an error while fetching events!');
                },
                color: 'yellow',   // a non-ajax option
                textColor: 'black' // a non-ajax option

            }

            // any other sources...

        ],

        dateClick: function (info) {

            //get all event
            command.getAllEvent= calendar.getEvents();


            if (command.id != null){
                delete command.id
            }

            info.dayEl.style.backgroundColor = 'red';
            $('.modal-body').empty()
            $('#Modal').modal('show');
            //CallAPISuject()
            CallAPIClassStudy()
            $('#exampleModalLongTitle').text(info.dateStr)

            command.getDate = info.dateStr
        },

        eventClick: function(info) {
        	debugger
            // alert('Event: ' + info.event.title);
            // alert('Event: ' + info.event.id);
            // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            // alert('View: ' + info.view.type);
            $('.modal-body').empty()
            command.id = info.event.id
            var option = {
                url:'/v1/TimeStudy',
                id: info.event.id
            }
            API.GET(option).then(rs=>{

                setValue(rs)
                $('#Modal').modal('show');
            })
            // change the border color just for fun
            info.el.style.borderColor = 'red';
        }

    });

    $('#save').on("click", function () {
        var data = getValue();

        if (command.id != null){
            data.timeStudyId = command.id;
        }

        var option = {
            url: "/v1/TimeStudy",
            data: JSON.stringify(data)
        }

        API.POST(option).then(rs => {
            calendar.refetchEvents()
            $("#Modal").modal('hide')
        })


    })

    $('.modal-content').on('click', '#add_row', function () {
        $('.modal-body').append(row())

    })

    $('.modal-body').on('click','#remove',function (){
        if (command.id == null){
            $('.modal-body').html('')
            return;
        }

        var option = {
            url:'/v1/TimeStudy',
            id : command.id
        }

        var check = confirm("DELETE !!!")

        if (check == false){
            return;
        }

        API.DELETE(option).then(rs=>{
            if (rs== true){
                calendar.refetchEvents()
                $("#Modal").modal('hide')
            }
        })
    })

    calendar.render();
});

//call API suject

const CallAPISuject = () => {

    var option_subject = ""
    var option = {
        url: '/v1/subject'
    }
    API.GET(option).then(rs => {
        command.subject = [...rs]
    })
}



const getSuject = (rs) => {
    var subject = `
            <option selected>Choose...</option>`;
    for (const key in rs) {
        subject = subject + `<option value = "${rs[key].subjectId}">${rs[key].subjectName}</option>`
    }
    return subject;

}


const getTeacher = (rs) => {
	debugger
    var teacher = `
            <option selected>Choose...</option>`;
    for (const key in rs) {
        teacher = teacher + `<option value = "${rs[key].teacherId}">${rs[key].fullname}</option>`
    }


    return teacher;
}

const CallAPIClassStudy = () => {

    var option = {
        url: '/v1/classstudy/getall'
    }
    API.GET(option).then(rs => {
        command.classStudy = [...rs]
    })
}

const getClassStudy = (rs) => {
    var classStudy = `
            <option selected>Choose...</option>`;
    for (const key in rs) {
        classStudy = classStudy + `<option value = "${rs[key].classStudyId}">${rs[key].className}</option>`
    }
    return classStudy;

}



$('.modal-body').on('change', '.input_subject', function () {
    var id_subect = Number($(this).val())

    var id_teach = command.subject.find(rs => rs.subjectId == id_subect)
    //tim vi tri cua row
    var element_parent = $(this).parent().parent();
    var div_teach = element_parent.children(".teach")
    // Tim theo id cua teach chua  class


    div_teach.children().html(getTeacher(id_teach.teacherEntities))

})

const getValue = () => {
    var data = {}
    var el = app.querySelector('.modal-body')
    var elinput = el.querySelectorAll("input")
    var elselecte = el.querySelectorAll('select');

    elinput.forEach(vl => {
        data = {...data, [vl.name]: vl.value}
    })

    elselecte.forEach(vl => {
        if (vl.value != "Choose...") {
            data = {...data, [vl.name]: {[vl.name]: vl.value}}
        }
    })
    return data;
}

const setValue =(ob)=>{
	debugger
    $('.modal-body').append(row())
    var el = app.querySelector('.modal-body')
    var elinput = el.querySelectorAll("input")
    var elselecte = el.querySelectorAll('select');

    elinput.forEach(vl => {
           vl.value = ob[vl.name];
    })

    elselecte.forEach(vl => {
        if (vl.name == 'classStudyId'){
            $(vl).val(ob[vl.name][vl.name])
            // var element_parent = $(vl).parent().parent();
            // var div_teach = element_parent.children(".teach")


            // var select_teach =  div_teach.children()

            // var teacher = [];

            // teacher = ob.subjectId.teacherEntities;


            // select_teach.html(getTeacher(teacher))
            // $(select_teach).val(teacher[0].teacherId)

            

        }

    })
}

const  validate = (value)=>{
    if (value == '' || value == null){
        return false;
    }
    return  true;
}


const row = (ob) => {
    return `<div class="row mt-1">
                        <div class="col-3">
                            <input type="time" name="timeStudyHourStart" class="form-control" >
                        </div>
                        <div class="col-3">
                            <input type="time" name="timeStudyHourEnd" class="form-control" >
                        </div>

                            <input disabled type="hidden" value="${command.getDate}"  name="timeStudyDay" class="form-control" >

                        <div class="col-4">
                            <select id="input_subject" name="classStudyId" class="form-control input_subject">
                               ${getClassStudy(command.classStudy)}
                            </select>
                        </div>
                        <div class="col-2 d-flex align-items-center">
                            <Button class="btn-danger btn" id="remove">X</Button>
                        </div>
                    </div>`
}


