package com.example.capstone.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class ClassKey implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "studentId")
	private Long student;
	@Column(name = "attendenceId")
	private Long attendence;
	@Column(name = "teacherId")
	private Long teacher;
	@Column(name = "subjectId")
	private Long subject;
}
