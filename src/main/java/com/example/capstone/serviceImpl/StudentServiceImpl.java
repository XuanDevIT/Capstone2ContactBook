package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.dto.StudentWithSubjectDTO;
import com.example.capstone.entity.StudentEntity;
import com.example.capstone.repository.StudentRepository;
import com.example.capstone.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentRepository studentRepository;
	
	@Override
	public StudentEntity save(StudentEntity studentEntity) {
		return studentRepository.save(studentEntity);
		//return null;
	}

	@Override
	public List<StudentEntity> findAll() {
		studentRepository.findAll();
		return studentRepository.findAll();
	}

	@Override
	public StudentEntity findByID(Long Id) {
		return studentRepository.findById(Id).get();
	}

	@Override
	public boolean delete(Long id) {

		try {
			studentRepository.deleteByIdImage(id);
			studentRepository.deleteById(id);
			
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

	@Override
	public List<StudentWithSubjectDTO> selectStudentWithSubject() {
		List<StudentWithSubjectDTO> objs = studentRepository.getStudentWithSubject();
		return objs;
	}
	
	@Override
	public List<Long> getArrId(){
		return studentRepository.getArrID();
	}


}
