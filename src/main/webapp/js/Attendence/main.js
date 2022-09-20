$(document).ready(function () {

    const update_title = $("#update_qs")
    const title_qs = $("#title_qs")
    update_title.click(function () {
        var check = title_qs.attr('contenteditable');
        debugger
        if (check == 'false') {
            title_qs.prop('contenteditable', true)
            title_qs.css({
                'border': '1px solid',
                'padding': '5px',
                'border-radius': '5px',
            })
            update_title.css({
                'font-size': '30px',
                'color': 'aquamarine'
            })
            title_qs.focus();
            return;
        }
        title_qs.prop('contenteditable', false)
        title_qs.css({
            'border': '',
            'padding': '',
            'border-radius': '',
        })
        update_title.css({
            'font-size': '',
            'color': ''
        })
        return;
    })

    title_qs.blur(function () {
        title_qs.prop('contenteditable', false)
        title_qs.css({
            'border': '',
            'padding': '',
            'border-radius': '',
        })
        update_title.css({
            'font-size': '',
            'color': ''
        })
    })


    var qs_item = $('#qs_item')
    var icon = qs_item.parent().children('i');
    qs_item.click(function () {
        var check = qs_item.attr('contenteditable');
        if (check == 'false') {
            icon.css({ 'display': 'block' })
            qs_item.prop('contenteditable', true)
            qs_item.focus()
            return
        }

    })

    qs_item.blur(function () {
        qs_item.prop('contenteditable', false)
        icon.css({ 'display': 'none' })
    })



    const item_aw = () => `
        <div class="form-check   mb-2">
        <i class="fa fa-times remove mr-5 mt-1" style="font-size: 20px;color:red ; z-index: 3;"  aria-hidden="true"></i>
            <div class="edit_form">
                <input class="form-check-input " type="radio" name="exampleRadios"
                    id="exampleRadios1" value="option1" checked>
                <p class="form-check-label answer_item" contenteditable="false" for="exampleRadios1">
                answer
                </p>
                <i class="fa fa-pencil ml-3 " style="font-size: 20px;" aria-hidden="true"></i>
            <div>
           
          
        </div>
`


    $('.answer_btn').click(function () {
        const list_answer = $('.list_answer')
        $('.btn-handle_add').removeAttr('disabled')
        list_answer.append(item_aw())

    })



    $(".list_answer .form-check").on("click", ".edit_form", function () {
        alert('ok')


    });

    $(".list_answer").on("blur", "div > .edit_form", function () {
        $(this).children('p').prop('contenteditable', false)
        $(this).children('i').css({ 'display': 'none' })
    })

    $('.btn-handle_add').click(function () {
        var this__ = $(this)
        setTimeout(() => {
            this__.removeClass('spinner-border text-primary')
            $(this).text('ADD')
            $(this).addClass('btn-secondary')
            $(".list_answer").children().remove()
            $('.btn-handle_add').attr('disabled', 'disabled')
        }, 2000)
        $(this).addClass('spinner-border text-primary')
        $(this).removeClass('btn-secondary')
        $(this).text('')
    })


    $(".list_answer ").on("click", 'div > .edit_form', function () {
        debugger
        console.log($(this).children('i'));
        var edit_text = $(this).children('p')
        var check = edit_text.attr('contenteditable');
        if (check == 'false') {
            $(this).children('i').css({ 'display': 'block' })
            edit_text.prop('contenteditable', true)
            edit_text.focus()
            return
        }
    })

    $(".list_answer ").on('click', 'div >i', function () {
        var elemnt = $(this).parent()
        elemnt.remove();
    })


    // $(".change_text").on('click', function () {
    // debugger
    // var pr = $(this).parent();
    // var action = pr.children('.status_action');
    // if (action.children('.icon_update').length === 0) {
    // action.append(' <i class="fa fa-pencil icon_update btn btn-success "
    // aria-hidden="true"></i>')
    // }
    // })

    $("#questions").on('click', 'tr > .change_text', function () {

        var pr = $(this).parent();
        var action = pr.children('.status_action');
        if (action.children('i').length === 0) {
            action.append(' <i class="fa fa-pencil icon_update btn btn-success " aria-hidden="true"></i>')
        }
    })


    $(".add_row").on('click', function () {

        $('#questions').prepend(item_question(undefined))
    })

    const item_question = (ob) => {
        var date_item;
        var data_id;
        if (ob != undefined) {
            date_item = fm_date(ob.create_date);
            data_id = "data_id=" + ob.id
        }
        var dat

        return `
    	 <tr>
            <td class="text-center status_action">
            
	        </td>
            <td contenteditable="true" name="title" class="change_text">  <input type="time" class="form-control" value =${date_item == undefined ? null : date_item}  id="create_date" name="birthdaytime"></td>
            <td contenteditable="true" name="title" class="change_text">  <input type="time" class="form-control" value =${date_item == undefined ? null : date_item}  id="create_date" name="birthdaytime"></td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
            <td contenteditable="true" name="title" class="change_text">${ob == undefined ? '....' : ob.title}</td>
	        <td class="text-center " ${data_id}  >
	           
	            <i class="fa fa-trash-o btn btn-danger btn_delete" aria-hidden="true"></i>
	            </td>
	        
	    </tr>
    	`;
    }





    $("#questions").on('click', 'tr td > .btn_save', function () {
        var data = {};
        var ob = {}
        var tg = $(this).parent().parent();
        tg.children('.status_action').empty();
        // get value
        const getElement = tg.children('.change_text')
        $.each(getElement, function (index, value) {
            var __this = $(this)
            if (__this.children().length) {
                const ch = __this.children()
                data = { ...data, [ch.attr('id')]: ch.val() }
            }
            data = { ...data, [__this.attr('id')]: __this.text().trim() }

        })
        debugger
        if (data.undefined != undefined) {
            delete data.undefined
        }

        if (validate(data) == false) {
            show_alert('Please enter field');
            return;
        }

        if (check_id(this) === undefined) {
            save(this, data)
        } else {
            data = { ...data, id: check_id(this) }
            save(this, data)
        }

    })

    const validate = (params) => {

        var check = true;
        const array_key = Object.keys(params)
        array_key.forEach((key) => {
            if (params[key] == "...." || params[key] == "") {
                check = false;
            }
        })

        if (check === true) {
            return true;
        }

        return false
    }

    const show_alert = (title, describe) => {
        const mess = alert_checkValidate(title, describe)
        setTimeout(() => {
            $('.col .show').remove();
        }, 5000)

        // show mess
        $('table').before(mess);

    }

    $("#questions").on('click', 'tr td > .btn_delete', function () {
        debugger
        var get_id_tr = $(this).parent('td');
        var id = get_id_tr.attr('data_id');

        if (id != undefined) {
            hander_deleteRow_question(id).then(rs => {
                if (rs == true) {
                    show_alert('DELETE', ' Delete success !!! ');
                    showdata();
                    return;
                }
                show_alert('DELETE', ' Delete error !!! ');
                return;
            })
        }
    })

    $("#questions").on('click', 'tr td > .btn_add_question', function () {
        var elemnt_modal = $('#exampleModal')
        var html = `
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        ` ;
        elemnt_modal.html(html);
    })


    const check_id = (e) => {
        var get_id_tr = $(e).parent('td');
        var id = get_id_tr.attr('data_id');
        return id;
    }

    const save = (e, ob) => {
        var data = {};
        var get_id_tr = $(e).parent('td');
        hander_insertRow_question(ob).then(rs => {
            console.log(rs);
            get_id_tr.attr("data_id", rs.id)
            if (rs.id > 0) {
                show_alert('Success', ' Save success !!! ');
                showdata();
                return;
            }
            show_alert('Fail !!! ', ' Fail! Please check data !!! ');
            return;
        })

    }

    const fm_date = (date) => {
        var date_time = new Date(date)
        var cr_mo = Number(date_time.getMonth() + 1)
        var mo = cr_mo < 10 ? "0" + cr_mo : cr_mo

        var day = date_time.getDate() < 10 ? "0" + date_time.getDate() : date_time.getDate();

        return date_time.getFullYear() + '-' + mo + '-' + day;
    }

    const showdata = () => {
        let data_qs = {}

        hander_showdata_question().then(rs => {
            $("#questions").empty()
            if (rs.length > 0) {
                data_qs = [...rs]
                data_qs.map((rs) => {
                    $("#questions").prepend(item_question(rs));
                })
                return;
            }
            show_alert('Fail !!! ', ' Fail! Please check data !!! ');
        })

    }

    showdata();
});



com.check = (ob) => {
    var rs = true
    const keys = Object.keys(ob)
    keys.forEach((key) => {
        if (ob[key] === '') {
            rs = false;
        }
    })
    return rs;
}

com.Validate = (obs) => {
    debugger
    var rs = true
    obs.map((rs) => {
        if (!com.check(rs)) {
            alert('NO OK')
            rs = false;
        }
    })
    return rs;
}