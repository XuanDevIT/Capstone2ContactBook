package com.example.capstone.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class StudentSubjectKey implements Serializable {

	private static final long serialVersionUID = -4942026430643721678L;

	@Column(name = "student_id")
	Long studentId;
	
	@Column(name = "subject_id")
    Long subjectId;
}
