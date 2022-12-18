package com.example.capstone.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.dto.AttendanceSTDDTO;
import com.example.capstone.dto.ClassStudyDTO;
import com.example.capstone.dto.StudentAttendanceDTO;
import com.example.capstone.dto.StudentClassStudyDTO;
import com.example.capstone.entity.AttendanceEntity;
import com.example.capstone.entity.TimeStudyEntity;
import com.example.capstone.repository.AttendanceRepository;
import com.example.capstone.repository.ClassStudyRepository;
import com.example.capstone.repository.StudentClassStudyRepository;
import com.example.capstone.service.AttendanceService;
import com.example.capstone.service.TimeStudyService;

@Service
public class AttendanceServiceImpl implements AttendanceService {

	@Autowired
	private AttendanceRepository attendanceRepository;
	
	@Autowired
	private ClassStudyRepository classStudyRepository;
	
	@Autowired
	private StudentClassStudyRepository studentClassStudyRepository;
	
	@Autowired
	private TimeStudyService studyService;
	
	@Override
	public AttendanceEntity save(AttendanceEntity list) {
		return attendanceRepository.save(list);
	}

	@Override
	public List<AttendanceEntity> findByTimeStudy(Long id) {
		TimeStudyEntity studyEntity = studyService.findById(id);
		return attendanceRepository.findByTimeStudy(studyEntity);
	}

	@Override
	public List<AttendanceSTDDTO> findListAttendanceByIdAndClassId(Long studentId, Long classStudyId) {
		return attendanceRepository.findListAttendanceByIdAndClassId(studentId, classStudyId);
	}

	@Override
	public Map<String, Object> findAttendanceByClassId(Long classStudyId) {
		Map<String, Object> map = new HashMap<>();
		ClassStudyDTO classStudyInfo = classStudyRepository.getClassStudyById(classStudyId);
		
		List<StudentClassStudyDTO> studentList = studentClassStudyRepository.getStudentByClassStudyId(classStudyId);
		List<Date> timeStudyList = studyService.findByClassStudyId(classStudyId);
		
		map.put("classInfo", classStudyInfo);
		map.put("timeStudyList", timeStudyList);
		
		List<Map<String, Object>> listResponse = new ArrayList<>();
		
		for(StudentClassStudyDTO student : studentList) {
			List<AttendanceSTDDTO> attendanceList = attendanceRepository.findListAttendanceByIdAndClassId(Long.parseLong(student.getStudentId()), classStudyId);
			Map<String, Object> attendOfStudent = new HashMap<String, Object>();
			attendOfStudent.put(student.getStudentId(), attendanceList);
			listResponse.add(attendOfStudent);
		}
		map.put("attendanceList", listResponse);
		
		return map;
	}

	@Override
	public List<StudentAttendanceDTO> findListStudentAttendance(Long timeStudyId) {
		return attendanceRepository.findListStudentAttendance(timeStudyId);
	}
	
	
}
