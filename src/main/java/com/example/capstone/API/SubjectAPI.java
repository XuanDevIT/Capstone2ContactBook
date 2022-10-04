package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.SubjectEntity;
import com.example.capstone.service.SubjectService;

@RestController
public class SubjectAPI {

	@Autowired
	private SubjectService subjectService;

	@PostMapping("/v1/subject")
	public SubjectEntity save(@RequestBody SubjectEntity subjectEntity) {
		return subjectService.save(subjectEntity);
	}

	@GetMapping("/v1/subject/{id}")
	public SubjectEntity findById(@PathVariable(value = "id")  Integer id) {
		return subjectService.findByID(Long.valueOf(id));
	}

	@GetMapping("/v1/subject")
	public List<SubjectEntity> findAll() {
		return subjectService.findAll();
	}

	@DeleteMapping("/v1/subject/{id}")
	public boolean delete(@PathVariable(value = "id") Long id) {
		try {
			subjectService.delete(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
