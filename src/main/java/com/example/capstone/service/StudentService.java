package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.dto.NewStudentDTO;


@Service
public interface StudentService {

	public NewStudentDTO save(NewStudentDTO NewStudentDTO);
	public List<NewStudentDTO> findAll();
	public NewStudentDTO findByID(Long Id);
}
