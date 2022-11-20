const hander_insertRow_question = (obj) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/question/v1",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(obj),
            dataType: "json"
        }).done(function (msg) {
            resolve(msg)
        });

    })
}

const hander_deleteRow_question =(id)=>{
	return new Promise((resolve, reject) => {
        $.ajax({
            method: "DELETE",
            url: "http://localhost:8080/question/v1"+id,
            dataType: "json"
        }).done(function (msg) {
            resolve(msg)
        });

    })
}
	
const hander_showdata_question =()=>{
	return new Promise((resolve, reject) => {
        $.ajax({
            method: "GET",
            url: "http://localhost:8080/question/v1",
            dataType: "json"
        }).done(function (msg) {
            resolve(msg)
        });

    })
}