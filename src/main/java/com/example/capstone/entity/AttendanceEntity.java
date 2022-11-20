package com.example.capstone.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "attendance")
public class AttendanceEntity {

	@EmbeddedId
	private AttendanceKey id;
	
	private boolean status;
	
	private String reason;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("student_id")
	@JoinColumn(name = "student_id")
	StudentEntity student;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("time_study_id")
	@JoinColumn(name = "time_study_id")
	TimeStudyEntity timeStudy;
	
}
