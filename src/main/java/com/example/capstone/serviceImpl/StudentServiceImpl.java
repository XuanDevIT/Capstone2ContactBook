package com.example.capstone.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.converter.NewStudentConverter;
import com.example.capstone.dto.NewStudentDTO;
import com.example.capstone.repository.StudentRepository;
import com.example.capstone.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	StudentRepository  studentRepository;

	@Autowired
	NewStudentConverter sNewStudentConverter;
	
	@Override
	public NewStudentDTO save(NewStudentDTO NewStudentDTO) {
		return sNewStudentConverter.toDTO(sNewStudentConverter.toEntity(NewStudentDTO));
	}
	
	
}
