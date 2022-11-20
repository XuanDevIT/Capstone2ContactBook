package com.example.capstone.entityRequest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class StudentClassStudyRequest {
	@JsonProperty("studentId")
	private Long studentId;
	@JsonProperty("classStudyId")
	private Long classStudyId;
}
