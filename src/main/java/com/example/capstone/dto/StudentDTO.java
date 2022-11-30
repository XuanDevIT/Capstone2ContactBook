package com.example.capstone.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class StudentDTO extends BaseDTO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long studentId;

	private String password;
	private String fullname;
	private String username;
	private String classStudent;
	private String birthDay;
	private String address;
	private String phone;
	private String nameParent;
	private String mailParent;
	private String birthDayParent;
	private String sexStudent;
	private String sexParent;


}
