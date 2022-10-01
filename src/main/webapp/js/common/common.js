//lay gia tri tu form
const g_common={}

g_common.getDataFromInfo1 = function(ob) {
	debugger
	var data = {};
	var element = document.querySelector('#'+ob)

	var inputs = element.querySelectorAll('input')

	$.each(inputs, (index, val) => {
		data = { ...data, [val.name]: val.value }
	})
	if (data.studentId == '') {
		delete data.studentId;
	}
	return data;

}

g_common.setValueFromInfo =function(){
    var data = {};
	var element = document.querySelector('#'+ob)

	var inputs = element.querySelectorAll('input')
    
    $.each(inputs, (index, val) => {
		keys.forEach(key => {
			if (val.name == key) {
				val.value = data_rs[key];
				return false;
			}
		})
	})
}

g_common.getValue=function(ob){
    return `
                 <tr >
                    <td >${ob.fullName}</td>
                    <td> ${ob.sex} </td>
                    <td>${ob.address} </td>
                    <td>${ob.email} </td>
                    <td>${ob.phone} </td>
                    <td>
                        <button type="button" class="btn btn-primary btn-sm btn-crud" data_id=${ob.teacherId} id="btn_update">
                            <!-- <i class="fa-sharp fa-solid fa-pen-to-square"></i> -->
                            update
                        </button>
                        <a
                            class="btn btn-danger btn-sm btn-crud" id="btn_delete" data_id=${ob.teacherId} data-toggle="modal"
                            data-target="#deleteTeacherModal">
                            <!-- <i class="fa-solid fa-trash"></i> -->
                            delete
                        </a>
                    </td>
                    <!-- Modal -->

                </tr>           
            `
}
export {g_common}

