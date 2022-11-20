package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.StudentSubject;
import com.example.capstone.repository.StudentSubjectRepository;
import com.example.capstone.service.StudentSubjectService;

@Service
public class StudentSubjectServiceImpl implements StudentSubjectService {

	@Autowired
	StudentSubjectRepository studentSubjectRepository;
	
	@Override
	public int save(List<StudentSubject> studentSubjectList) {
		List<StudentSubject> listResult = studentSubjectRepository.saveAll(studentSubjectList);
		return listResult.size();
	}

}
