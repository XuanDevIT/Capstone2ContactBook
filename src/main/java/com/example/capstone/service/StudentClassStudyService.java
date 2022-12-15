package com.example.capstone.service;

import java.util.List;

import com.example.capstone.dto.StudentClassStudyDTO;
import com.example.capstone.entity.StudentClassStudy;
import com.example.capstone.entity.StudentClassStudyKey;

public interface StudentClassStudyService {
	StudentClassStudy save(StudentClassStudy studentClassStudy);
	
	int delete(StudentClassStudyKey studentClassStudyKey);
	
	List<StudentClassStudy> getAll();
	
	List<StudentClassStudyDTO> getStudentListByClassStudyId(Long id);
	
	public Integer removeStudentFromClass(Long classStudyId, Long studentId);
}
