const get_value_form = () => { 
    var data = {};
    var element = $('#inforSubject')

    var input = element.children().children('input');

    $.each(inputs, (index, val) => {
        data = { ...data, [val.name]: val.value}
    })
    return data;
}