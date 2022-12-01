package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.ClassStudyEntity;
import com.example.capstone.entity.TimeStudyEntity;
import com.example.capstone.service.ClassStudyService;
import com.example.capstone.service.TimeStudyService;

@RestController
public class TimeStudyAPI {
	@Autowired
	TimeStudyService timeStudyService;

	@Autowired
	ClassStudyService classStudyService;

	@PostMapping("/v1/TimeStudy")
	public TimeStudyEntity save(@RequestBody TimeStudyEntity timeStudyEntity) {

		return timeStudyService.save(timeStudyEntity);
	}

	@GetMapping(("/v1/TimeStudy"))
	public List<TimeStudyEntity> findAll() {
		// TODO Auto-generated method stub
		return timeStudyService.findAll();
	}

	@GetMapping("/v1/TimeStudy/{id}")
	public TimeStudyEntity findById(@PathVariable(value = "id")Integer id) {
		// TODO Auto-generated method stub
		return timeStudyService.findById(Long.valueOf(id));
	}

	@PutMapping("/v1/TimeStudy/{id}")
	public TimeStudyEntity update(@PathVariable(value = "id") Integer id) {
		TimeStudyEntity dto = timeStudyService.findById(Long.valueOf(id));
		return dto;
	}

	@DeleteMapping("/v1/TimeStudy/{id}")
	public boolean delete(@PathVariable(value = "id") Integer id) {
		
		try {
			timeStudyService.delete(Long.valueOf(id));
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@GetMapping(("/v1/calendar"))
	public List<Object> findAllCalendar() {
		// TODO Auto-generated method stub
		return timeStudyService.findAllCalendar();
	}
	
	@GetMapping("/v1/TimeStudy/getAll")
	public List<Object> findALl() {
		return timeStudyService.getAll();
	}
	
	@GetMapping("/v1/timestudy/classstudy/{id}")
	public ResponseEntity<?> findByClassStudyId(@PathVariable(value = "id") Integer classStudyId) {
		ClassStudyEntity obj = classStudyService.findByCLassStudy(Long.valueOf(classStudyId));
		return new ResponseEntity<List<TimeStudyEntity>>(timeStudyService.findByClassStudyId(obj), HttpStatus.OK);
	}
}
