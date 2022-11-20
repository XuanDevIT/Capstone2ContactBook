package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.dto.StudentClassStudyDTO;
import com.example.capstone.entity.StudentClassStudy;
import com.example.capstone.entity.StudentClassStudyKey;
import com.example.capstone.repository.StudentClassStudyRepository;
import com.example.capstone.service.StudentClassStudyService;

@Service
public class StudentClassStudyImpl implements StudentClassStudyService {

	@Autowired
	private StudentClassStudyRepository repository;

	@Override
	public StudentClassStudy save(StudentClassStudy studentClassStudy) {
		return repository.save(studentClassStudy);
	}

	@Override
	public int delete(StudentClassStudyKey studentClassStudyKey) {
		try {
			repository.deleteById(studentClassStudyKey);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}

	@Override
	public List<StudentClassStudy> getAll() {
		return repository.findAll();
	}

	@Override
	public List<StudentClassStudyDTO> getStudentListByClassStudyId(Long classStudyId) {
		return repository.getStudentByClassStudyId(classStudyId);
	}
}
