package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.TimeStudyEntity;
import com.example.capstone.repository.TimeStudyRepository;
import com.example.capstone.service.TimeStudyService;

@Service
public class TimeStudyServiceImlp implements TimeStudyService{
	
	@Autowired
	TimeStudyRepository timeStudyRepository;

	@Override
	public TimeStudyEntity save(TimeStudyEntity timeStudyEntity) {
		
		return timeStudyRepository.save(timeStudyEntity);
	}

	@Override
	public List<TimeStudyEntity> findAll() {
		// TODO Auto-generated method stub
		return timeStudyRepository.findAll();
	}

	@Override
	public TimeStudyEntity findById(Long id) {
		// TODO Auto-generated method stub
		return timeStudyRepository.findById(id).get();
	}

	@Override
	public TimeStudyEntity update(TimeStudyEntity timeStudyEntity) {
		// TODO Auto-generated method stub
		return timeStudyRepository.save(timeStudyEntity);
	}

	@Override
	public boolean delete(Long id) {
		
		try {
			timeStudyRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
