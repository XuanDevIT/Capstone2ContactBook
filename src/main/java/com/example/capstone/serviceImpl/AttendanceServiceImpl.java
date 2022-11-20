package com.example.capstone.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.AttendanceEntity;
import com.example.capstone.repository.AttendanceRepository;
import com.example.capstone.service.AttendanceService;

@Service
public class AttendanceServiceImpl implements AttendanceService {

	@Autowired
	private AttendanceRepository attendanceRepository;
	
	@Override
	public AttendanceEntity save(AttendanceEntity list) {
		return attendanceRepository.save(list);
	}
	
}
