package com.example.capstone.converter;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.example.capstone.dto.NewStudentDTO;
import com.example.capstone.entity.StudentEntity;
@Component 
public class NewStudentConverter {
	
	ModelMapper mapper = new ModelMapper();
	public StudentEntity toEntity(NewStudentDTO dto) {
		return mapper.map(dto, StudentEntity.class);
	}
	public NewStudentDTO toDTO (StudentEntity dto) {
		return mapper.map(dto, NewStudentDTO.class);
	}
}
