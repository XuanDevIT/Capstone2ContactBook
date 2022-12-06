// $("#imgStudent").on('change', function () {
//   debugger
//   console.log("12312312")
//   // var names = [];
//   // for (var i = 0; i < $(this).get(0).files.length; ++i) {
//   //   names.push($(this).get(0).files[i].name);
//   // }
//   // $("imgStudent").val(names);
// });​

var names = [];
for (var i = 0; i < $('#imgStudent').get(0).files.length; ++i) {
  names.add($(imgStudent).imgStudent.files[i]);
}
$("#imgStudent").val(names);