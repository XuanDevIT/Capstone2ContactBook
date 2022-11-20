import { g_common } from "./common.js";
import { API } from "./api.js";
var app = $('#app')

app.on('click','#save_inforTeacher',function(){
    debugger
    var data = g_common.getDataFromInfo1('inforStudent');
    console.log(data)
    var option = {
        data: JSON.stringify(data),
        url : "/v1/teacher"
    }
    API.POST(option).then(rs=>{
        if(rs.teacherId > 0){
            render();
            $('#teacherModal').modal('hide')
        }
    })
})

function render(){
    var show_data = $('#show_data');
    var html;
    var option = {
        url: "v1/teacher"
    }
    API.GET(option).then(rs=>{
        rs.forEach((item) => {
            html = html + g_common.getValue(item)
        })
        show_data.html(html)
    })
    
}
render();

app.on('click','#btn_delete',function(){
    debugger
    var data_id = $(this).attr('data_id')
    var option = {
        url : "/v1/teacher",
        id: Number(data_id)
    }
    API.DELETE(option).then(rs=>{
        debugger
        if(rs == true){
            render();
        }
    })
})

app.on('click','#btn_update',function(){
    debugger
    var data_id = $(this).attr('data_id')

    var option = {
        url : "/v1/teacher",
        id: data_id
    }
    API.GET(option).then(rs=>{
        showTeacherModal('teacherModal');
        g_common.setValueFromInfo(rs,'inforStudent')
    })

})