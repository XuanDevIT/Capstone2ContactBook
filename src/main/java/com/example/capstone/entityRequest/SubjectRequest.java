package com.example.capstone.entityRequest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SubjectRequest {
	private Long subjectId;
	@JsonProperty("subjectName")
	private String subjectName;
}
