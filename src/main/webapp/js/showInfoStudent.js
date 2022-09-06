//lay gia tri tu form
const getDataFromInfo =()=>{
	var data={};
	var element= $('#inforStudent')

	var inputs = element.children().children('input');
	
	$.each(inputs,(index,val)=>{
			data= {...data,[val.name] : val.value}
	})
	if(data.studentId ==''){
		delete data.studentId;
	}
	return data;
	
}

//reset gia tri trong form
const reset_value_from = ()=>{
	var element= $('#inforStudent')

	var inputs = element.children().children('input');
	
	$.each(inputs,(index,val)=>{
			val.value = '';
	})
}

//gan gia tri cho form
const setDataFromInfo =(data_rs)=>{
	debugger;
	var keys = Object.keys(data_rs);
	var element= $('#inforStudent')

	var inputs = element.children().children('input');
	$.each(inputs,(index,val)=>{
			keys.forEach(key=>{
				if(val.name == key){
					val.value = data_rs[key];
					return false;
				}
			})
	})
	
}

//show dialog va set du lieu cho dialog
const popup_edit_show = (id)=>{
	handler_findByID(id).then(rs=>setDataFromInfo(rs))
}

//xu ly button save cua dialog
const popup_save = ()=>{
	handler_insert_student(getDataFromInfo()).then(rs=>{
		window.location.href="/student/showInfoStudent";
	})
}

//su kienej
$(document).ready(function(){

	//event save onclick
	$('#save_inforStuden').on('click', function(){
		popup_save();
	})

	//event edit onclick
	$('.edit').on('click',function(){
		    debugger
			var id = $(this).attr('data-student_id')

			popup_edit_show(id);
	})

	//reset gia tri form(add)
	$('#showPopup_save').on('click',()=>{
		reset_value_from();
	})

	$('.delete_student').on('click',function(){
		debugger
		var id = $(this).attr('data-student_id')
		$('#confirm_delete').on('click',()=>{
			
			handler_delete_student(id).then(rs=>{
				window.location.href="/student/showInfoStudent";
			})
			
		})
	})

})