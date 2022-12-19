$(function () {

	//khoi tao get class study by teacher id = 1
	getClassStudyById(1).then(function (response) {
		console.log(response);
		console.log("response get by teach");
		response.forEach((element) => {
			console.log(element);
			$("#list-classStudy").append(`
                <li class="list-group-item item-classStudy" id="${element.classStudyId}">
                    <div> Class: ${element.className}</div>
                    <div> Subject: ${element.subjectName}</div>
                </li>
            `);
		});
	});

	$(".list-student-by-class").hide();
	saveAttendance();

	selectClassStudy();

	selectTimeStudy();

	buttonBack();
});


// get timeStudy by by class Study id
const getTimeStudy = (id) => {
	getTimeStudyByClassStudyId(id).then(function (response) {
		response.forEach((element) => {
			console.log(element);
			$("#list-timeStudy")
				.append(`<li class="list-group-item item-time-study" id="${
				element.timeStudyId
			}">
                <div>${sliceDate(element.timeStudyDay)}</div>
                <div>Time start: ${element.timeStudyHourStart}</div>
                <div>Time end: ${element.timeStudyHourEnd}</div>
                </li>`);
		});
	});
};

 // xu li su kien onclick classStudy
const selectClassStudy = () => {
	$(document).on("click", ".item-classStudy", function () {
		var classStudyId = $(this).attr("id");
		localStorage.setItem("classStudyId", classStudyId);
		$(".listClassStudy").hide();
		getTimeStudy(classStudyId);
		$(".listTimeStudy").show();
	});
};

// xu li su kien on click timestudy
const selectTimeStudy = () => {
	$(document).on("click", ".item-time-study", function () {
		localStorage.setItem("timeStudyId", $(this).attr("id"));
		getListStudentByClassStudy($(this).attr("id"));

		$(".listClassStudy").hide();
		$(".listTimeStudy").hide();
		$(".list-student-by-class").show();
	});
};


const getTimeStudyByClassStudy = (id) => {
	getTimeStudyByClassStudyId(id).then(function (response) {
		response.forEach((element) => {
			console.log(element);
			$("#list-timeStudy")
				.append(`<li class="list-group-item item-time-study" id="${
				element.timeStudyId
			}">
                <div>${sliceDate(element.timeStudyDay)}</div>
                <div>Time start: ${element.timeStudyHourStart}</div>
                <div>Time end: ${element.timeStudyHourEnd}</div>
                </li>`);
		});
		console.log(response);
	});
};


// xu li button back
const buttonBack = () => {
	$("#back-to-list-timeStudy").on("click", function () {

		localStorage.removeItem("timeStudyId");
		$('#list-student').empty()

		$(".listTimeStudy").show();
		$(".list-student-by-class").hide();
	});

	$("#back-to-list-class").on("click", function () {
		localStorage.removeItem("classStudyId");
		$('#list-timeStudy').empty();

		$(".listClassStudy").show();
		$(".listTimeStudy").hide();
	});
};

//render list student
const getListStudentByClassStudy = (id) => {
	$('#list-student').empty();
	getStudentByClassStudyId(id).then(function (response) {
		response.forEach((element) => {
			console.log(element);
			$("#list-student").append(
				itemStudentAttendance(element)
			);
		});
	});
};
// call service save attendance
const saveAttendance = () => {
	$("#saveAttendance").on("click", function () {
		$.ajax({
			method: "POST",
			url: "/v1/attendance/add",
			data: JSON.stringify(getInfoAttendance()),
			contentType: "application/json",
			success: function (response) {
				alert("điểm danh thành công");
				console.log(response);
			},
			error: function (response) {
				console.log(response);
			},
		});
	});
};

// get class study by teacher
const getClassStudyById = (teacherId) => {
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "GET",
			url: "/v1/classstudy/teacherid/" + teacherId,
			success: function (response) {
				resolve(response);
			},
			error: function () {
				alert("get list class study error");
			},
		});
	});
};

const getTimeStudyByClassStudyId = (classStudyId) => {
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "GET",
			url: "/v1/timestudy/classstudy/" + classStudyId,
			success: function (response) {
				resolve(response);
			},
			error: function () {
				alert("get list time study error");
			},
		});
	});
};

// get listutudent by class study

const getStudentByClassStudyId = (classStudyId) => {
	return new Promise(function (resolve, reject) {
		$.ajax({
			method: "GET",
			url: "/v1/list/attendance/" + classStudyId,
			success: function (response) {
				resolve(response);
			},
			error: function () {
				alert("get list time study error");
			},
		});
	});
};


const sliceDate = (dateString) => dateString.slice(0, 10);

// item 1 student
const itemStudentAttendance = (ob) =>
	`<tr class="item-student" id="${ob.studentId}">
        <th style="width: 10%" scope="row" id="studentId">${ob.studentId}</th>
        <td style="width: 37%" class="student-name">${ob.fullname}</td>
        <td style="width: 25%" class="status p-1">
        ${statusHtml(ob.status)}
        </td>
        <td style="width: 28%" class="text-center">
            <input  class="form-control" id="reason" type="text" name="reason" value="${ob.reason}"></input>
        </td>
    </tr>`;

function statusHtml(status)  {
	if(status) {
		return `<select name="status" id="status" id="student-status" class="custom-select border-0 bg-transparent w-100">
            <option value="1" selected="selected">Present</option>
            <option value="0">Absent</option>
        </select>`
	} else {
		return `<select name="status" id="status" id="student-status" class="custom-select border-0 bg-transparent w-100">
            <option value="1">Present</option>
            <option value="0" selected="selected">Absent</option>
        </select>`
	}
}
// get thong tin diem danh tu giao dien.
const getInfoAttendance = () => {
	var resultToSave = [];
	const nodeList = document.querySelectorAll(".item-student");
	nodeList.forEach((item) => {
		let element = {
			studentId: item.id,
			status: item.querySelector("#status").value,
			reason: item.querySelector("#reason").value,
			timeStudyId: localStorage.getItem("timeStudyId"),
		};
		resultToSave.push(element);
		console.log(`resultToSave : ${resultToSave}`);
	});
	return resultToSave;
};