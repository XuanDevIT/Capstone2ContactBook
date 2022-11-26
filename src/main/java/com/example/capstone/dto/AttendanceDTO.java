package com.example.capstone.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AttendanceDTO {
	String studentId;
	String studentName;
	Date timeStudyDay;
	boolean status;
	String reason;
}
