package com.example.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.dto.StudentWithSubjectDTO;
import com.example.capstone.entity.StudentEntity;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Long>{
	
	@Query(nativeQuery = true, value = "Select st.student_id as id, st.fullname as fullname from student st inner join student_subject ss on st.student_id = ss.student_id ")
	public List<StudentWithSubjectDTO> getStudentWithSubject();
	
//	@Query(nativeQuery = true, value = "Select st.student_id as id, st.fullname as fullname from student st inner join student_class_study ss on st.student_id = ss.student_id "
//			+ "where ss.class_study_id = ?1")
//	public List<StudentWithSubjectDTO> getStudentByClassStudyId(Long classStudyId);
	
	@Query(nativeQuery = true, value = "select student_id from student")
	public List<Long> getArrID();
	
}
