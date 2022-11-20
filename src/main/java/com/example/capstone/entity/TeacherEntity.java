package com.example.capstone.entity;

import java.sql.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "teacher")
public class TeacherEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "teacher_id")
	private Long teacherId;

	@Column(columnDefinition = "NVARCHAR(50)")
	private String fullname;
	private String username;
	private String password;
	private Date birthday;
	private String address;
	private String phone;
	private String email;
	private String sex;
	private String degree;
	private String classManage;
	private String photos;

	@JsonIgnore
	@ManyToMany(mappedBy = "teacherEntities")
	List<SubjectEntity> subjectEntities;
	
	@JsonIgnore
	@OneToMany(mappedBy = "teacher")
	private Set<ClassStudyEntity> classStudies;
}
