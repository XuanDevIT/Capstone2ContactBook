package com.example.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.dto.ClassStudyDTO;
import com.example.capstone.entity.ClassStudyEntity;

@Repository
public interface ClassStudyRepository extends JpaRepository<ClassStudyEntity, Long>  {
	
	@Query(nativeQuery = true, value = "SELECT cs.class_Study_id as classStudyId,cs.subject_id as subjectId, s.subject_name as subjectName, "
			+ "cs.teacher_id as teacherId, t.fullname as fullname,cs.class_name as className "
			+ "from class_study cs inner join "
			+ "subject s on s.subject_id = cs.subject_id "
			+ "inner join teacher t on t.teacher_id = cs.teacher_id ")
	public List<ClassStudyDTO> getClassStudy();
	
	@Query(nativeQuery = true, value = "SELECT cs.class_Study_id as classStudyId,cs.subject_id as subjectId, s.subject_name as subjectName, "
			+ "cs.teacher_id as teacherId, t.fullname as fullname,cs.class_name as className "
			+ "from class_study cs inner join "
			+ "subject s on s.subject_id = cs.subject_id "
			+ "inner join teacher t on t.teacher_id = cs.teacher_id "
			+ "where class_study_id = ?1")
	public ClassStudyDTO getClassStudyById(Long id);
	
	@Query(nativeQuery = true, value = "SELECT cs.class_Study_id as classStudyId,cs.subject_id as subjectId, s.subject_name as subjectName, "
			+ "cs.teacher_id as teacherId, t.fullname as fullname,cs.class_name as className "
			+ "from class_study cs inner join "
			+ "subject s on s.subject_id = cs.subject_id "
			+ "inner join teacher t on t.teacher_id = cs.teacher_id "
			+ "where cs.teacher_id = ?1")
	public List<ClassStudyDTO> getClassStudyByTeacherId(Long id);
}
