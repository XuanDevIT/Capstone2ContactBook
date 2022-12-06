import API from './attendanceAPI.js'

$(function() {
    API.getByClassId(1).then( function(response) {
        console.log(response);
    })
})