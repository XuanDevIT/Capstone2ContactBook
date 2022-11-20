package com.example.capstone.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
@Table(name = "student_subject")
public class StudentSubject {
	
	@EmbeddedId
	StudentSubjectKey id;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("student_id")
	@JoinColumn(name = "student_id")
	StudentEntity student;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("subject_id")
	@JoinColumn(name = "subject_id")
	SubjectEntity subject;
	
	
}
