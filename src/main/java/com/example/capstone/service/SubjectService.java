package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.entity.SubjectEntity;

@Service
public interface SubjectService {

	public SubjectEntity save(SubjectEntity subjectEntity);
	
	public SubjectEntity findById(Long id);
	
	public List<SubjectEntity> findAll();
	
	public boolean delete(Long Id);
	
	public SubjectEntity subSave(Long subjectId, Long teacherId);
	
	
}
