package com.example.capstone.entity;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "student")
public class StudentEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long studentId;
	
	private String userName;
	private String password;
	private String fullName;
	private String classStudent;
	private int age;
	private String birthDay;
	private String address;
	private String phone;
	private String nameParent;
	private String mailParent;
	private String birthDayParent;
	private String sexStudent;
	private String sexParent;
//	@ManyToMany
//	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
//	private List<RoleEntity> roles = new ArrayList<>();
@JsonIgnore
	@OneToMany(mappedBy = "studentID",fetch = FetchType.LAZY)
	private List<AttendenceEntity> attendenceEntities;
	@JsonIgnore
	@OneToMany(mappedBy = "studentID",fetch = FetchType.LAZY)
	private List<ClassStudyEntity> attendenceEntities1;
	
}