package com.example.capstone.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.capstone.entity.TimeStudyEntity;

@Service
public interface TimeStudyService {

	public TimeStudyEntity save(TimeStudyEntity timeStudyEntity);
	public List<TimeStudyEntity> findAll();
	public TimeStudyEntity findById(Long id);
	public TimeStudyEntity update(TimeStudyEntity timeStudyEntity);
	public boolean delete(Long id);
	public List<Object> findAllCalendar();
}
