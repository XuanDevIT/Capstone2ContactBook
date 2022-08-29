package com.example.capstone.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class NewStudentDTO {
	
	private Long studentId;
	
	private String userName;
	private String password;
	private String fullName;
	private String classStudent;
	private int age;
	private Date birthDay;
	private String address;
	private String phone;
	
}
