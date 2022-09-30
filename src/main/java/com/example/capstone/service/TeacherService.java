package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.entity.TeacherEntity;

@Service
public interface TeacherService {
	public TeacherEntity save(TeacherEntity teacher);
	public List<TeacherEntity> findAll();
	public TeacherEntity findById(Long id);
	public TeacherEntity update(TeacherEntity teacher);
	public boolean delete(Long id); 
}
