$(function () {
	getClassStudyById(1).then(function (response) {
		console.log(response);
	});

	getTimeStudyByClassStudyId(1).then(function (response) {
		response.forEach((element) => {
			console.log(element);
			$("#list-timeStudy")
				.append(`<li class="list-group-item">
                ${sliceDate(element.timeStudyDay)}Time start: ${element.timeStudyHourStart}
                    Time end: ${element.timeStudyHourEnd}
                </li>`);
		});

		console.log(response);
	});

	getStudentByClassStudyId(1).then(function (response) {
		console.log("get student list by class Study");

		response.forEach(element => {
            $("#list-student").append(itemStudentAttendance(element));
        })
		console.log(response);
	});


    $('#saveAttendance').on('click', function() {
        getInfoAttendance();
    })
});

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

const itemStudentAttendance = (ob) =>
    `<tr class="item-student" id="${ob.studentId}">
        <th scope="row" id="studentId">${ob.studentId}</th>
        <td class="student-name">${ob.studentName}</td>
        <td class="status p-1">
        <select name="status" id="status" name="" id="student-status" class="custom-select border-0 bg-transparent w-100">
            <option value="1" autofocus>Attendant</option>
            <option value="0">Permission</option>
        </select>
        </td>
        <td class="text-center">
            <input class="form-control" id="reason" type="text" name="reason"></input>
        </td>
    </tr>`;

    const getInfoAttendance = () => {
        console.log($('#item-student'));
    }