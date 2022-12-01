package com.example.capstone.API;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.AttendanceEntity;
import com.example.capstone.entity.AttendanceKey;
import com.example.capstone.entity.StudentEntity;
import com.example.capstone.entity.TimeStudyEntity;
import com.example.capstone.entityRequest.AttendanceRequest;
import com.example.capstone.service.AttendanceService;
import com.example.capstone.service.StudentService;
import com.example.capstone.service.TimeStudyService;

@RestController
public class AttendanceAPI {

	@Autowired
	private AttendanceService attendanceService;

	@Autowired
	private StudentService studentService;

	@Autowired
	private TimeStudyService timeStudyService;

	@RequestMapping(value = "/v1/attendance/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<List<AttendanceEntity>> saveListAttendance(
			@RequestBody List<AttendanceRequest> attendanceRequest) {

		List<AttendanceEntity> attendanceListResponse = new ArrayList<>();

		for (AttendanceRequest ob : attendanceRequest) {
			AttendanceEntity attendanceEntity = new AttendanceEntity();
			// lấy thuộc tính trùng lặp rồi copy giá trị từ attendanceRequest =>
			// attendanceEntity
			attendanceEntity.setReason(ob.getReason());
			if (ob.getStatus().equals("1")) {
				attendanceEntity.setStatus(true);
			} else {
				attendanceEntity.setStatus(false);
			}
			AttendanceKey attendanceKey = new AttendanceKey();
			attendanceKey.setStudentId(Long.valueOf(ob.getStudentId()));
			attendanceKey.setTimeStudyId(Long.valueOf(ob.getTimeStudyId()));

			StudentEntity studentEntity = studentService.findByID(Long.valueOf(ob.getStudentId()));
			TimeStudyEntity timeStudyEntity = timeStudyService.findById(Long.valueOf(ob.getTimeStudyId()));

			attendanceEntity.setStudent(studentEntity);
			attendanceEntity.setTimeStudy(timeStudyEntity);
			attendanceEntity.setId(attendanceKey);

			attendanceService.save(attendanceEntity);

			attendanceListResponse.add(attendanceEntity);
		} 

		return new ResponseEntity<List<AttendanceEntity>>(attendanceListResponse, HttpStatus.OK);
	}
	

	@GetMapping(value = "/v1/attendance/{id}")
	@ResponseBody
	public ResponseEntity<?> getAttendance(@PathVariable(value = "id") Long classStudyId) { 
		return new ResponseEntity<Map<String, Object>>(attendanceService.findAttendanceByClassId(classStudyId), HttpStatus.OK);
	}

}
