package com.example.capstone.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Attendence")
public class AttendenceEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long attendenceId;
	private String status;
	private String note;
	
	@ManyToOne
	@JoinColumn(name = "tiemstudy")
	private TimeStudyEntity timeStudyID;
	
	@ManyToOne
	@JoinColumn(name = "studentID")
	private StudentEntity studentID;
	
	@ManyToOne
	@JoinColumn(name = "classID")
	private ClassStudyEntity classStudyID;
	
}
