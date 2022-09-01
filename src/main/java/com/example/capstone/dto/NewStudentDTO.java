package com.example.capstone.dto;



import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class NewStudentDTO {
	
	
	private Long studentId;
	
	//@NotBlank(message = "Thiếu fullName")
	private String fullName;
	
	//@NotBlank(message = "Thiếu username")
	private String userName;
	//@NotBlank(message = "Thiếu password")
	private String password;
	//@NotBlank(message = "Thiếu classStudent")
	private String classStudent;
	//@Min(10)
	private int age;
	//@NotBlank(message = "Thiếu birthDay")
	private String birthDay;
	//@NotBlank(message = "Thiếu address")
	private String address;
	//@NotBlank(message = "Thiếu phone")
	private String phone;
	
}
