package com.example.capstone.service;

import java.util.List;

import com.example.capstone.dto.ClassStudyDTO;
import com.example.capstone.entity.ClassStudyEntity;

public interface ClassStudyService {
	
	ClassStudyEntity save(ClassStudyEntity classStudyEntity);
	
	int delete(Long id);
	
	ClassStudyDTO findClassStudyById(Long id);
	
	List<ClassStudyEntity> getAllClassStudy();
	
	List<ClassStudyDTO> getClassStudyByTeacherId(Long id);
}
