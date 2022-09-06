package com.example.capstone.dto;

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
	
	public NewStudentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Long getStudentId() {
		return studentId;
	}
	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getClassStudent() {
		return classStudent;
	}
	public void setClassStudent(String classStudent) {
		this.classStudent = classStudent;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getBirthDay() {
		return birthDay;
	}
	public void setBirthDay(String birthDay) {
		this.birthDay = birthDay;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

}
