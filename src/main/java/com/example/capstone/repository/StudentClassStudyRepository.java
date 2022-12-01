package com.example.capstone.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.dto.StudentClassStudyDTO;
import com.example.capstone.entity.StudentClassStudy;
import com.example.capstone.entity.StudentClassStudyKey;

@Repository
public interface StudentClassStudyRepository extends JpaRepository<StudentClassStudy, StudentClassStudyKey> {
	
	@Query(nativeQuery = true, value = "Select scs.student_id as studentId, ss.fullname as studentName from student_class_study scs "
			+ "inner join student ss on ss.student_id = scs.student_id "
			+ "where scs.class_Study_Id = ?1")
	public List<StudentClassStudyDTO> getStudentByClassStudyId(Long classStudyId);
	
}
