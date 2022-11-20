package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.dto.StudentClassStudyDTO;
import com.example.capstone.entity.StudentClassStudy;
import com.example.capstone.entity.StudentClassStudyKey;
import com.example.capstone.entityRequest.ClassStudyIdRequest;
import com.example.capstone.entityRequest.StudentClassStudyRequest;
import com.example.capstone.service.ClassStudyService;
import com.example.capstone.service.StudentClassStudyService;

@RestController
public class StudentClassStudyAPI {
	
	@Autowired
	private StudentClassStudyService scsService; 
	
	@RequestMapping(value = "/v1/scs/add" , method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<StudentClassStudy> save(@RequestBody StudentClassStudyRequest request) {
		StudentClassStudyKey key = new StudentClassStudyKey();
		StudentClassStudy studentClassStudy = new StudentClassStudy();
		BeanUtils.copyProperties(request, key);
		studentClassStudy.setId(key);
		studentClassStudy = scsService.save(studentClassStudy);
		return new ResponseEntity<StudentClassStudy>(studentClassStudy, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/v1/scs/getall", method =RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE )
	@ResponseBody
	public ResponseEntity<List<StudentClassStudy>> getAll() {
		List<StudentClassStudy> list = scsService.getAll();
		return new ResponseEntity<List<StudentClassStudy>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/v1/getStudentByClass/{classStudyId}", method =RequestMethod.GET )
	public ResponseEntity<List<StudentClassStudyDTO>> getAll(@PathVariable(value = "classStudyId") String classStudyId) {
		List<StudentClassStudyDTO> l = scsService.getStudentListByClassStudyId(Long.parseLong(classStudyId));
		return new ResponseEntity<List<StudentClassStudyDTO>>(l, HttpStatus.OK);
	}
	
}
