package com.example.capstone.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "ClassStudy")
@Data
public class ClassStudyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long classStudyID;
	
	private String className;
	
	@ManyToOne
	@JoinColumn(name = "teacherID")
	private TeacherEntity teacherID;
	
	
	@ManyToOne
	@JoinColumn(name = "studentID")
	private StudentEntity studentID;
	
	@OneToMany(mappedBy = "classStudyID")
	private List<TimeStudyEntity> timeStudyEntities;
	
	@OneToMany(mappedBy = "classStudyID")
	private List<AttendenceEntity> attendenceEntities;
}
