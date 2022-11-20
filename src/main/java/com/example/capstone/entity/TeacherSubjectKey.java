package com.example.capstone.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class TeacherSubjectKey implements Serializable{
	@Column(name = "teacher_id")
	private Long teacherId;
	
	@Column(name = "subject_id")
    Long subjectId;
}
