package com.example.capstone.entityRequest;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListStudentId {
	
	@JsonProperty("listStudentId")
	private List<String> listStudentId;
	
	@JsonProperty("classId")
	private String classStudyId;
}
