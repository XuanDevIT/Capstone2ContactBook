package com.example.capstone.entityRequest;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
public class TeacherRequest {
	
	@JsonProperty("teacherId")
	private Long teacherId;
	@JsonProperty("fullname")
	private String fullname;
	@JsonProperty("username")
	private String username;
	@JsonProperty("password")
	private String password;
	@JsonProperty("birthday")
	private Date birthday;
	@JsonProperty("address")
	private String address;
	@JsonProperty("phone")
	private String phone;
	@JsonProperty("email")
	private String email;
	@JsonProperty("sex")
	private String sex;
	@JsonProperty("degree")
	private String degree;
	@JsonProperty("classManage")
	private String classManage;
	@JsonProperty("photos")
	private String photos;
}
