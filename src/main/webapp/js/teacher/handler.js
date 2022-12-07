const handler_insert_student1 = (ob) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: '/v1/student',
            contentType: 'application/json',
            data: JSON.stringify(ob),
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}
const handler_insert_student = (ob) => {
    return new Promise((resolve, reject) => {
        $.ajax({

            url: "http://localhost:8084/v1/image",
            method: "POST",
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: ob

        }).done(function(rs){
            resolve(rs);
        })
    })

    


}

const handler_findByID = (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: '/v1/student/' + id,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}

const handler_delete_student = (id) => {
    debugger
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'DELETE',
            url: '/v1/student/' + id,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}

const handler_show_data_student = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: '/v1/student',
            contentType: 'application/json',
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}