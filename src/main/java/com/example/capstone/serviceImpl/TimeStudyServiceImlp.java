package com.example.capstone.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.dto.TimeStudyDTO;
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

//	@Override
//	public List<Object> findAllCalendar() {
//		return null;
//	}

	

	@Override
	public List<Object> findAllCalendar() {
		List<Object> objects = new ArrayList<>();
		List<TimeStudyEntity> timeStudyEntities = timeStudyRepository.findAll();
		for (TimeStudyEntity timeStudyEntity:timeStudyEntities) {
			Map<String,String>  calendar = new HashMap<>();

			//start: '2022-09-29',
			String dateTime= timeStudyEntity.getTimeStudyDay().toString().substring(0,10);

			//start: '2022-09-29T10:30:00',
			StringBuilder start = new StringBuilder(dateTime);
			start.append("T").append(timeStudyEntity.getTimeStudyHourStart());

			//end: '2022-09-29T11:30:00',
			StringBuilder end = new StringBuilder(dateTime);
			end.append("T").append(timeStudyEntity.getTimeStudyHourEnd());

			// title: 'Toan',
			calendar.put("title",timeStudyEntity.getClassStudyId().getClassName());
			calendar.put("start",start.toString());
			calendar.put("end",end.toString());

			//id: 1
			calendar.put("id",timeStudyEntity.getTimeStudyId().toString());

			objects.add(calendar);
 		}
		return objects;
	}
	
	@Override
	public List<Object> getAll() {
		List<TimeStudyDTO> listTimeStudy = timeStudyRepository.getAll();
		List<Object> objects = new ArrayList<>();
		
		for (TimeStudyDTO timeStudyEntity: listTimeStudy) {
			Map<String,String>  calendar = new HashMap<>();

			//start: '2022-09-29',
			String dateTime= timeStudyEntity.getDate().toString().substring(0,10);

			//start: '2022-09-29T10:30:00',
			StringBuilder start = new StringBuilder(dateTime);
			start.append("T").append(timeStudyEntity.getStart());

			//end: '2022-09-29T11:30:00',
			StringBuilder end = new StringBuilder(dateTime);
			end.append("T").append(timeStudyEntity.getEnd());

			// title: 'Toan',
			calendar.put("title",timeStudyEntity.getSubjectName());
			calendar.put("start",start.toString());
			calendar.put("end",end.toString());
			calendar.put("classStudyId", timeStudyEntity.getClassStudyId());
			calendar.put("subjectName", timeStudyEntity.getSubjectName());
			calendar.put("teacherName", timeStudyEntity.getTeacherName());
			calendar.put("classStudyName", timeStudyEntity.getClassName());

			//id: 1
			calendar.put("timeStudyId",timeStudyEntity.getTimeStudyId().toString());

			objects.add(calendar);
 		}
		
		return objects;
	}

}
