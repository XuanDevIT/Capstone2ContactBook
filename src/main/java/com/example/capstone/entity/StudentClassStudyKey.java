package com.example.capstone.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentClassStudyKey implements Serializable {
	
	private static final long serialVersionUID = 2364890761872262837L;
	
	@Column(name = "student_id")
	private Long studentId;
	@Column(name = "class_study_id")
	private Long classStudyId;
}
