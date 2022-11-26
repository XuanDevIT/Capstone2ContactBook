package com.example.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.capstone.dto.AttendanceSTDDTO;
import com.example.capstone.entity.AttendanceEntity;
import com.example.capstone.entity.TimeStudyEntity;

@Repository
public interface AttendanceRepository extends JpaRepository<AttendanceEntity, Long> {
	
	List<AttendanceEntity> findByTimeStudy(TimeStudyEntity timeStudy);
	
	@Query(nativeQuery = true, value = "select ts.time_study_day as timeStudyDay,at.status as status, "
			+ "at.reason as reason "
			+ "from newspringboot.attendance at "
			+ "join time_study ts on ts.time_study_id = at.time_study_id "
			+ "join class_study cs on cs.class_study_id = ts.class_study_id "
			+ "join student st on st.student_id = at.student_id "
			+ "where at.student_id = ?1 and ts.class_study_id = ?2")
	List<AttendanceSTDDTO> findListAttendanceByIdAndClassId(Long studentId, Long classStudyId);
}
