debugger
const container = document.querySelector('#container');
const fileInput = document.querySelector('#file-input');
var command = [];
$(document).ready(function (){
	
	var settings = {
		url: "/v1/student/getArrId",
		method: "GET",
		timeout: 0
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for(const b of response){
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
	faceMatcher = new faceapi.FaceMatcher(trainingData, 0.9)

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


	for (const detection of resizedDetections) {
		const drawBox = new faceapi.draw.DrawBox(detection.detection.box, {
			label: faceMatcher.findBestMatch(detection.descriptor).toString()
		})
		drawBox.draw(canvas)
	}
})