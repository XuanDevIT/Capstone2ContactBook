const validateFromInfo = () => {

    var element = $('#inforStudent')

    var inputs = element.children().children('input');
    var check = true;
    for (var val of inputs) {
        if (val.value == '' && val.name !="studentId") {
            $(val).addClass('is-invalid')
            check = false;
            continue
        } 
        if ($(val).attr('type') == 'date') {
            date_cr = parseDate($.datepicker.formatDate('yy/mm/dd', new Date()))
            var bd = parseDate(val.value);
            if(date_cr < bd){
                $(val).addClass('is-invalid')
                check= false;
                continue
            }
        }
        debugger
        if($(val).attr('name') =='phone'){
			if(validatePhone(val.value)!= true ){
				$(this).addClass('is-invalid')
				check = false;
                continue
			}
		}

        $(val).removeClass('is-invalid');
    }
    
    return check;
}

const validatePhone=(phone) => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return vnf_regex.test(phone);
}

const parseDate = (date) => {
    date = date.replaceAll("-", "");
    date = date.replaceAll("/","");
    return Number(date);
}



