package com.example.capstone.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name = "student_class_study")
@Data
public class StudentClassStudy {
	@EmbeddedId
	StudentClassStudyKey id; 
	
	@JsonIgnore
	@ManyToOne
	@MapsId("student_id")
	@JoinColumn(name = "student_id")
	StudentEntity student;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("class_study_id")
	@JoinColumn(name = "class_study_id")
	ClassStudyEntity classStudy;
} 
