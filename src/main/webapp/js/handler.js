const handler_insert_student =(ob)=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'POST',
            url: '/v1/student',
            contentType: 'application/json',
            data: JSON.stringify(ob),
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}

const handler_findByID =(id)=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'GET',
            url: '/v1/student/'+id,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}

const handler_delete_student =(id)=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'DELETE',
            url: '/v1/student/'+id,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}

const handler_show_data_student =() => {
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'GET',
            url: '/v1/student',
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}