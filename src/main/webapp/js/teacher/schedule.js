const element_tr=()=>`
        <tr>
                                                
        <th scope="row"><input type="time"></input></th>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        <td contenteditable="true">......</td>
        </tr>
`;
$(document).ready(function () {
    const element_show_schedule=$('#list_schedule');
    $('#add_shedule').on('click',function(){
        element_show_schedule.before(element_tr())
    })
})