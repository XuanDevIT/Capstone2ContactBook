package com.example.capstone.service;

import java.util.List;
import java.util.Map;

import com.example.capstone.dto.AttendanceSTDDTO;
import com.example.capstone.entity.AttendanceEntity;

public interface AttendanceService {
	
	public AttendanceEntity save(AttendanceEntity listAttendance);
	
	public List<AttendanceEntity> findByTimeStudy(Long id);
	
	public List<AttendanceSTDDTO> findListAttendanceByIdAndClassId(Long studentId, Long classStudyId);

	public Map<String, Object> findAttendanceByClassId(Long classStudyId);
}
