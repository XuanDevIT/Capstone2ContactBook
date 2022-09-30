package com.example.capstone.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "teacher")
public class TeacherEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long teacherId;
	
	private String fullName;
	private String userName;
	private String password;
	private int age;
	private Date birthday;
	private String address;
	private String phone;
	private String email;
	private String sex;
	private String classManage;
	@Column(columnDefinition = "LONGBLOB")
	private String photos;
	
	@OneToMany(mappedBy = "teacherID")
	List<ClassStudyEntity> classStudyEntities;
	
	@OneToMany(mappedBy = "teacherID")
	List<SubjectEntity> classStudyEntities1;
   
}
