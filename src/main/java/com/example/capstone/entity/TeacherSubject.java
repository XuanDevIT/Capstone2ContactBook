package com.example.capstone.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "teacher_subject")
public class TeacherSubject {

	@EmbeddedId
	TeacherSubjectKey id;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("teacher_id")
	@JoinColumn(name = "teacher_id")
	TeacherEntity teacher;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("subject_id")
	@JoinColumn(name = "subject_id")
	SubjectEntity subject;
}
