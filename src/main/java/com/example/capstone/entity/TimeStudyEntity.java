package com.example.capstone.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "timeStudy")
public class TimeStudyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long timeStudyID;

	private Date timeStudyDay;
	private String timeStudyHourStart;
	private String timeStudyHourEnd;

	@ManyToOne
	@JoinColumn(name = "subjectID")
	private SubjectEntity subjectID;

	@OneToMany(mappedBy = "timeStudyID", fetch = FetchType.LAZY)
	List<AttendenceEntity> attendenceEntities;

	@ManyToOne
	@JoinColumn(name = "teacherID")
	private TeacherEntity teacherId;

	@ManyToOne
	@JoinColumn(name = "classStudyId")
	private ClassStudyEntity classStudyID;

}
