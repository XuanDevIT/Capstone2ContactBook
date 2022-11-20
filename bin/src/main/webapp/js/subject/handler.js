const insert_subject = (ob) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: '/v1/subject',
            contentType: 'application/json',
            data: JSON.stringify(ob),
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}
const findById_subject = (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: '/v1/subject' + id,
            contentType: 'application/json',
            data: JSON.stringify(ob),
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}

const findAll_subject = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: '/v1/subject',
            contentType: 'application/json',
            // data: JSON.stringify(),
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}

const delete_subject = (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'DELETE',
            url: '/v1/subject' + id,
            contentType: 'application/json',
            data: JSON.stringify(ob),
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}

const subSave_teach_subject = (ob) =>{
    return new Promise((resolve, reject) =>{
        $.ajax({
            method: 'POST',
            url:'/v1/subject1/'+ob.teacherId+'/'+ob.subjectId,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function (rs) {
            resolve(rs);
        })
    })
}