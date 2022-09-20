package com.example.capstone.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "timeStudy")
public class TimeStudyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long timeStudyID;
	private Date timeStudyDay;
	private String timeStudyHourStart;
	private String timeStudyHourEnd;
	
	@ManyToOne
	@JoinColumn(name="subjectID")
	private SubjectEntity subjectID;

	@OneToMany(mappedBy = "timeStudyID")
	List<AttendenceEntity> attendenceEntities;
	
	@OneToMany(mappedBy = "timeStudyID")
	List<ClassStudyEntity> attendenceEntities1;
	
}
