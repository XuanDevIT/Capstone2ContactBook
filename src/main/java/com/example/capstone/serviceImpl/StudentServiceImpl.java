package com.example.capstone.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.converter.NewStudentConverter;
import com.example.capstone.dto.NewStudentDTO;
import com.example.capstone.entity.StudentEntity;
import com.example.capstone.repository.StudentRepository;
import com.example.capstone.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	NewStudentConverter sNewStudentConverter;

	@Override
	public NewStudentDTO save(NewStudentDTO newStudentDTO) {
		return sNewStudentConverter.toDTO(studentRepository.save(sNewStudentConverter.toEntity(newStudentDTO)));

	}

	@Override
	public List<NewStudentDTO> findAll() {
		List<NewStudentDTO> list = new ArrayList<>();

		studentRepository.findAll().stream().forEach(studen -> {
			list.add(sNewStudentConverter.toDTO(studen));
		});

		return list;
	}

	@Override
	public NewStudentDTO findByID(Long Id) {
		// TODO Auto-generated method stub

		return sNewStudentConverter.toDTO(studentRepository.findById(Id).get());
	}

	@Override
	public boolean delete(Long ID) {
		StudentEntity studentEntity = new StudentEntity();
		studentEntity.setStudentId(ID);
		try {
			studentRepository.delete(studentEntity);
			return true;
		} catch (Exception e) {
			return false;
		}

	}

}
