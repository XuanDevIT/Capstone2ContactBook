package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.SubjectEntity;
import com.example.capstone.repository.SubjectRepository;
import com.example.capstone.service.SubjectService;

@Service
public class SubjectSevicelmpl implements SubjectService {
	@Autowired
	SubjectRepository subjectRepository;

	@Override
	public SubjectEntity save(SubjectEntity subjectEntity) {

		return subjectRepository.save(subjectEntity);
	}

	@Override
	public SubjectEntity findByID(Long id) {
		return subjectRepository.findById(id).get();
	}

	@Override
	public List<SubjectEntity> findAll() {
		// TODO Auto-generated method stub
		return subjectRepository.findAll();
	}

	@Override
	public boolean delete(Long Id) {
		// TODO Auto-generated method stub

		try {
			subjectRepository.deleteById(Id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
