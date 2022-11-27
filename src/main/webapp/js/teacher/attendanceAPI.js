const API = {}

API.getByClassId = (classStudyId) => {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: 'GET',
            url: '/v1/attendance/' + classStudyId,
            success: function(response) {
                resolve(response)
                alert('get attendance success !!!!')
            },
            error: function() {
                alert('get attendance fail!!!!!!!')

            }
        })
    })
}

export default API;