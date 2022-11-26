package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.SubjectEntity;
import com.example.capstone.entityRequest.SubjectRequest;
import com.example.capstone.service.SubjectService;

@RestController
public class SubjectAPI {

	@Autowired
	private SubjectService subjectService;

	@PostMapping( value = "/v1/subject", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public SubjectEntity save(@RequestBody SubjectRequest subjectRequest) {
		SubjectEntity subjectEntity = new SubjectEntity();
		BeanUtils.copyProperties(subjectRequest, subjectEntity);
		return subjectService.save(subjectEntity);
	}

	@GetMapping("/v1/subject/{id}")
	public SubjectEntity findById(@PathVariable(value = "id")  Integer id) {
		return subjectService.findById(Long.valueOf(id));
	}

	@GetMapping("/v1/subject")
	public ResponseEntity<List<SubjectEntity>> findAll() {
		return new ResponseEntity<List<SubjectEntity>>(subjectService.findAll(), HttpStatus.OK);
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
