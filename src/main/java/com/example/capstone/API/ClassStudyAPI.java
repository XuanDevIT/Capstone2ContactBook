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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.dto.ClassStudyDTO;
import com.example.capstone.entity.ClassStudyEntity;
import com.example.capstone.entity.SubjectEntity;
import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.entityRequest.ClassStudyRequest;
import com.example.capstone.service.ClassStudyService;
import com.example.capstone.service.SubjectService;
import com.example.capstone.service.TeacherService;

@RestController
public class ClassStudyAPI {

	@Autowired
	private ClassStudyService classStudyService;

	@Autowired
	private TeacherService teacherService;

	@Autowired
	SubjectService subjectService;

	@RequestMapping(value = "/v1/add/classstudy", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ClassStudyEntity save(@RequestBody ClassStudyRequest classStudyRequest) {
		ClassStudyEntity classStudyEntity = new ClassStudyEntity();
		BeanUtils.copyProperties(classStudyRequest, classStudyEntity);
		if (classStudyRequest.getTeacherId() != null) {
			TeacherEntity teacherEntity = teacherService.findById(classStudyRequest.getTeacherId());
			classStudyEntity.setTeacher(teacherEntity);
		}

		if (classStudyRequest.getSubjectId() != null) {
			SubjectEntity subjectEntity = subjectService.findById(classStudyRequest.getSubjectId());
			classStudyEntity.setSubject(subjectEntity);
		}

		return classStudyService.save(classStudyEntity);
	}

	@GetMapping(value = "/v1/classstudy/getall")
	public ResponseEntity<List<ClassStudyDTO>> getAllClassStudy() {
		List<ClassStudyDTO> listClassStudy = classStudyService.getAllClassStudyDTO();
		return new ResponseEntity<List<ClassStudyDTO>>(listClassStudy, HttpStatus.OK);
	}
	
	@GetMapping(value = "/v1/classStudy")
	public List<ClassStudyEntity> getAll(){
		return classStudyService.getAllClassStudy();
	}
	
	@GetMapping("/v1/classstudyid/{id}")
	public ResponseEntity<ClassStudyDTO> findById(@PathVariable(value = "id")  Integer id) {
		return new ResponseEntity<ClassStudyDTO>(classStudyService.findClassStudyById(id.longValue()), HttpStatus.OK);
	}
	
	@GetMapping("/v1/classstudy/teacherid/{id}")
	public ResponseEntity<List<ClassStudyDTO>> findByTeacherId(@PathVariable(value = "id") Integer id) {
		return new ResponseEntity<List<ClassStudyDTO>>(classStudyService.getClassStudyByTeacherId(id.longValue()), HttpStatus.OK);
	}
	
	@DeleteMapping("/v1/classStudy/{id}")
	public Integer deleteById(@PathVariable(value = "id") Integer id) {
		try {
			return classStudyService.delete(id.longValue());
		} catch(Exception e) {
			return 0;
		}
	}

}
