package com.example.capstone.service;

import org.springframework.stereotype.Service;

import com.example.capstone.dto.NewStudentDTO;

@Service
public interface StudentService {

	public NewStudentDTO save(NewStudentDTO NewStudentDTO);
}
