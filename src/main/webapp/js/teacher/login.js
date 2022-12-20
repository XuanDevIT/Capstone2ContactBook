var login = {};
$(document).ready(function () {
    // login.user = $("#user").val();
    // login.pass = $("#pass").val();
    //console.log("user: ", login.user, "passs:" , login.pass)
    $("#btnLogin").on("click", function () {
        debugger;
        var settings = {
            url: "/v1/login/" + $("#user").val() + "/" + $("#pass").val(),
            method: "GET",
            timeout: 0
        };

        $.ajax(settings).done(function (response) {
            debugger
            console.log(response);
            if (response !== "") {
                window.location.href = "/path?path_url=teacher/Homepage";
            } else {
                var settings = {
                    url: "/v1/loginStudent/" + $("#user").val() + "/" + $("#pass").val(),
                    method: "GET",
                    timeout: 0
                };
        
                $.ajax(settings).done(function (response) {
                    debugger
                    console.log(response);
                    if (response !== "") {
                        window.location.href = "/path?path_url=student/Homepage";
                    } else {
                        if($("#user").val() === "admin" && $("#pass").val() === "admin"){
                            window.location.href = "/path?path_url=admin/Homepage";
                        }else {
                            alert("Username or Password is invalid!!!")
                        }
                    }
                });
            }
        });

        
    })

})