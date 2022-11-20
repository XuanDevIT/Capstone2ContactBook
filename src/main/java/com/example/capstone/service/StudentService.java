package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.dto.StudentWithSubjectDTO;
import com.example.capstone.entity.StudentEntity;


@Service
public interface StudentService {
	
	public StudentEntity save(StudentEntity studentEntity);
	public StudentEntity findByID(Long id);
	
	public List<StudentWithSubjectDTO> selectStudentWithSubject();	
	List<StudentEntity> findAll();
	public boolean delete (Long id);
}
