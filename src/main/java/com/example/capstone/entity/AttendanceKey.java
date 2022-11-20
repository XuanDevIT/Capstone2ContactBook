package com.example.capstone.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class AttendanceKey implements Serializable {

	private static final long serialVersionUID = -6726351377894717949L;
	@Column(name = "time_study_id")
	private Long timeStudyId;
	@Column(name = "student_id")
	private Long studentId;
}
