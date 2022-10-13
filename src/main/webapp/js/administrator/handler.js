const insert_teacher = (ob) =>{
	return new Promise((resolve, reject) =>{
		$.ajax({
			method: 'POST',
			url: '/v1/teacher',
			contentType: 'application/json',
			data: JSON.stringify(ob),
			dataType:'json'
		}).done(function(rs){
			resolve(rs);
		})
	})
}

const findByID_teacher =(id)=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'GET',
            url: '/v1/teacher/'+id,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}

const delete_teacher =(id)=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'DELETE',
            url: '/v1/teacher/'+id,
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}

const show_data_teacher =() => {
    return new Promise((resolve, reject)=>{
        $.ajax({
            method: 'GET',
            url: '/v1/teacher',
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(rs){
            resolve(rs);
        })
    })
}
