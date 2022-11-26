package com.example.capstone.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.dto.TimeStudyDTO;
import com.example.capstone.entity.TimeStudyEntity;

@Repository
public interface TimeStudyRepository extends JpaRepository<TimeStudyEntity, Long>{
	
	@Query(nativeQuery = true, value = "select ts.time_study_id as timeStudyId,"
			+ "	   ts.time_study_day as date,"
			+ "       ts.time_study_hour_start as start,"
			+ "       ts.time_study_hour_end as end,"
			+ "       cs.class_name as className,"
			+ "       teach.fullname as teacherName,"
			+ "       sj.subject_name as subjectName,"
			+ "		  ts.class_study_id as classStudyId"
			+ "        from time_study ts"
			+ "		join class_study cs on ts.class_study_id = cs.class_study_id"
			+ "        join teacher teach on teach.teacher_id = cs.teacher_id"
			+ "        join subject sj on sj.subject_id = cs.subject_id")
	public List<TimeStudyDTO> getAll();
	
	@Query(nativeQuery = true, value = "Select time_study_day from time_study where class_study_id = ?1")
	List<Date> findByClassStudyId(Long classStudyId);
}
