// debugger;
// document.getElementById("container1").src = "/v1/image/getID/1";
debugger
const getImg = (id) => {
    debugger;
    document.getElementById("container1").src = "/v1/image/getID/" + 3;
    console.log("v1/image/getID/" + id);
}
const hander_getAll_img = () => {

    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/v1/image",
            method: "GET",
            timeout: 0
        }).done(function (rs) {
            resolve(rs)
        })
    })
}

const hander_getByID_img = (id) => {

    debugger;

    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/v1/image/getID/" + { id },
            method: "GET",
            timeout: 0
        }).done(function (rs) {
            resolve(rs)
        })
    })
}


const get_img_student = () => {
    debugger
    var arr;
    var settings  = {
        url: "/v1/image/selectArr" ,
        method: "GET",
        timeout: 0
    };
    debugger
    $.ajax(settings).done(function (response) {

        debugger
        console.log(response);
        //return response;
        arr = response;
        console.log(arr);

        
    });

}


$(document).ready(function () {
    debugger;
    console.log(get_img_student());
});