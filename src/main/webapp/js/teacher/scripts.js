debugger
const container = document.querySelector('#container');
const fileInput = document.querySelector('#file-input');
var command = [];
var studentIdLong = [];
const ob = [];
const arrAttendance = [];
$(document).ready(function () {

	var settings = {
		url: "/v1/student/getArrId",
		method: "GET",
		timeout: 0
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for (const b of response) {
			command.push(b.toString());
		}
	});

})

async function loadTrainingData() {
	debugger
	//const labels = ['LeBong', 'ThuyTien', 'HuynhAnh', 'QuangHai','CongVinh']

	//const arr = [1, 2, 3, 4, 5];

	const labels = [];
	const temp = '';
	for (const a of command) {
		//temp = a.toString();
		labels.push(a.toString());
	}

	const faceDescriptors = []
	debugger
	for (const label of labels) {
		debugger

		const descriptors = []
		for (let i = 1; i <= 4; i++) {
			//const image = await faceapi.fetchImage(`/js/data/${label}/${i}.jpeg`)
			const image = await faceapi.fetchImage(`/imgdata/student/${label}/${i}.jpeg`)
			const detection = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor()
			descriptors.push(detection.descriptor)
		}
		faceDescriptors.push(new faceapi.LabeledFaceDescriptors(label, descriptors))
		Toastify({
			text: `Training xong data của ${label}!`
		}).showToast();
	}
	debugger
	return faceDescriptors
}

let faceMatcher
async function init() {
	//Users/xuanle/important/gitCaps2/caps2/src/main/webapp/js
	debugger
	await Promise.all([
		faceapi.loadSsdMobilenetv1Model('/js/models'),
		faceapi.loadFaceRecognitionModel('/js/models'),
		faceapi.loadFaceLandmarkModel('/js/models'),
	])


	Toastify({
		text: "Tải xong model nhận diện!",
	}).showToast();

	const trainingData = await loadTrainingData()
	faceMatcher = new faceapi.FaceMatcher(trainingData, 0.45)

	console.log(faceMatcher)
	document.querySelector("#loading").remove();
}

init()

fileInput.addEventListener('change', async () => {
	debugger
	const files = fileInput.files;

	const image = await faceapi.bufferToImage(files[0]);
	const canvas = faceapi.createCanvasFromMedia(image);

	container.innerHTML = ''
	container.append(image);
	container.append(canvas);

	const size = {
		width: image.width,
		height: image.height
	}

	faceapi.matchDimensions(canvas, size)

	const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
	const resizedDetections = faceapi.resizeResults(detections, size)

	// faceapi.draw.drawDetections(canvas, resizedDetections)

	var studentID = [];
	for (const detection of resizedDetections) {
		const drawBox = new faceapi.draw.DrawBox(detection.detection.box, {
			label: faceMatcher.findBestMatch(detection.descriptor).toString()
		})
		studentID.push(faceMatcher.findBestMatch(detection.descriptor).toString().charAt(0));

		drawBox.draw(canvas)
	}
	debugger


	for (const a of studentID) {
		studentIdLong.push(a);
	}
	console.log(studentIdLong);


})
console.log(studentIdLong);


$(document).on("click", "#btnConfirm", function () {
	debugger

	//const ob = [];
	for (const student of studentIdLong) {
		let element = {
			studentId: student,
			status: '1',
			reason: '',
			timeStudyId: localStorage.getItem("timeStudyId"),
		};
		ob.push(element);

	}
	var arrayClass = getInfoAttendance()
	var arrayClassId = [];
	for( const arr of arrayClass){
		arrayClassId.push(arr.studentId);
	}
	console.log(arrayClassId);

	for(var i = 0; i < ob.length; i++){
		if(ob[i].studentId !== 'u'){
			if(arrayClassId.includes(ob[i].studentId)){
				//ob.splice(i, 1);

				arrAttendance.push(ob[i]);
			}
		}
		
	}

	console.log(ob);

	// const index = array.indexOf(5);
	// if (index > -1) { // only splice array when item is found
	// 	array.splice(index, 1); // 2nd parameter means remove one item only
	// }

	

	// array = [2, 9]
	return new Promise((resolve, reject) => {
		$.ajax({
			method: "POST",
			url: "/v1/attendance/add",
			data: JSON.stringify(arrAttendance),
			contentType: "application/json",
			success: function (response) {
				alert("điểm danh thành công");
				console.log(response);
				container.innerHTML = '';
				fileInput.value = '';
			},
			error: function (response) {
				console.log(response);
			},
		});
	})
	debugger

});
debugger
