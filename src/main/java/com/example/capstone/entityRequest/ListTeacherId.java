package com.example.capstone.entityRequest;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTeacherId {
	
	@JsonProperty("listIdTeacher")
	private List<String> listIdTeacher;
	
	@JsonProperty("subjectId")
	private String subjectId;
}
