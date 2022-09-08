package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.entity.StudentEntity;


@Service
public interface StudentService {

	//public NewStudentDTO save(NewStudentDTO NewStudentDTO);
	//public List<NewStudentDTO> findAll();
	//public NewStudentDTO findByID(Long Id);
	//public boolean delete (Long ID);
	
	public StudentEntity save(StudentEntity studentEntity);
	public StudentEntity findByID(Long Id);

	List<StudentEntity> findAll();
	public boolean delete (Long ID);
}
