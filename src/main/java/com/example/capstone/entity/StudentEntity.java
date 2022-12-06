package com.example.capstone.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "student")
@JsonIgnoreProperties(ignoreUnknown = true)
public class StudentEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long studentId;

	private String password;
	@Column(columnDefinition = "NVARCHAR(50)")
	private String fullname;
	private String username;
	private String classStudent;
	private String birthDay;
	private String age;
	private String address;
	private String phone;
	private String nameParent;
	private String mailParent;
	private String birthDayParent;
	private String sexStudent;
	private String sexParent;

	@JsonIgnore
	@OneToMany(mappedBy = "student")
	private Set<StudentSubject> subject;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student")
	private Set<StudentClassStudy> classStudy;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student")
	private Set<AttendanceEntity> attendance;

}