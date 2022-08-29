package com.example.capstone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NewDTO {
	private String title;
	private String content;
	private String shortDescription;
	private String categoryCode;
	private String thumbnail;
	
}
