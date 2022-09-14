package com.example.capstone.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Teacher {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long teacherId;
	
	private String fullName;
	private String sex;
	private Date birthday;
	private String address;
	private String password;
	private String classManage;
	private String degree;
	private String email;
	private String phone;
	@Column(columnDefinition = "LONGBLOB")
	private String photos;
}
//id
//Họ và tên
//sinh nhật
//Nơi sinh
//bằng cấp
//email
//sdt
//gioi tinh
//img
//classManage
//
//private String userName;
//private String password;
//private String fullName;
//private String classStudent;
//private int age;
//private Date birthDay;
//private String address;
//private String phone;
