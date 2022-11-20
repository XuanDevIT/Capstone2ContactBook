package com.example.capstone.entityRequest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceRequest {
	
	@JsonProperty("timeStudyId")
	private String timeStudyId;
	
	@JsonProperty("studentId")
	private String studentId;
	
	@JsonProperty("status")
	private String status;
	
	@JsonProperty("reason")
	private String reason;
}
