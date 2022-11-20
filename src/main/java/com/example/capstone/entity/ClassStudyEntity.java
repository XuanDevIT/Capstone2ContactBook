package com.example.capstone.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "class_study")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassStudyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "class_study_id")
	private Long classStudyId;
	
	private String className;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "teacher_id")
	private TeacherEntity teacher;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "subject_id")
	private SubjectEntity subject;

	@JsonIgnore
	@OneToMany(mappedBy = "classStudy")
	Set<StudentClassStudy> classStudy;
	
	@JsonIgnore
	@OneToMany(mappedBy = "classStudyId")
	private Set<TimeStudyEntity> timeStudy;
	
}
