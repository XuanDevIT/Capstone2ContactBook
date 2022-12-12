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
		getListStudentByClassStudy(
			localStorage.getItem("classStudyId")
		);

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
	getStudentByClassStudyId(1).then(function (response) {
		response.forEach((element) => {
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
			url: "/v1/getStudentByClass/" + classStudyId,
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
        <th scope="row" id="studentId">${ob.studentId}</th>
        <td class="student-name">${ob.studentName}</td>
        <td class="status p-1">
        <select name="status" id="status" name="" id="student-status" class="custom-select border-0 bg-transparent w-100">
            <option value="1" selected="selected">Attendant</option>
            <option value="0">Permission</option>
        </select>
        </td>
        <td class="text-center">
            <input class="form-control" id="reason" type="text" name="reason"></input>
        </td>
    </tr>`;
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
	});
	return resultToSave;
};