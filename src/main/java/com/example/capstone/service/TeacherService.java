package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.entity.Teacher;

@Service
public interface TeacherService {
	public Teacher save(Teacher teacher);
	public List<Teacher> findAll();
	public Teacher findById(Long id);
	public Teacher update(Teacher teacher);
	public void delete(Long id); 
}
