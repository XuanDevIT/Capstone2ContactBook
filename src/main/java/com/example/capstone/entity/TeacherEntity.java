package com.example.capstone.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "teacher")
public class TeacherEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

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
	private String degree;
	private String classManage;
	private String photos;

	@JsonIgnore
	@OneToMany(mappedBy = "teacherId")
	List<TimeStudyEntity> timeStudyEntities;

	@JsonIgnore
	@ManyToMany(mappedBy = "teacherEntities")
	List<SubjectEntity> subjectEntities;

}
