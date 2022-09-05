const getDataFromInfo =()=>{
	var data={};
	var element= $('#inforStudent')

	var inputs = element.children().children('input');
	
	$.each(inputs,(index,val)=>{
			data= {...data,[val.name] : val.value}
	})
	
	return data;
	
}

const setDataFromInfo =()=>{
	var data={};
	var element= $('#inforStudent')

	var inputs = element.children().children('input');
	$.each(inputs,(index,val)=>{
			data= {...data,[val.name] : val.value}
	})
	
	return data;
	
}

const popup_edit_show = ()=>{

}

const popup_save = ()=>{
	handler_insert_student(getDataFromInfo()).then(rs=>{
		window.location.href="/student/showInfoStudent";
	})
}

$(document).ready(function(){
	$('#save_inforStuden').on('click', function(){
		popup_save();
	})

	$('.edit').on('click',function(){
		
	})


})