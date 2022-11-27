







const getClassStudyById = (teacherId) => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/classstudy/teacherid/' + teacherId,
            success: function(response) {
                resolve(response)
                alert('get attendance success !!!!')
            },
            error: function() {
                alert('get attendance error')
            }
        })
    })
}
