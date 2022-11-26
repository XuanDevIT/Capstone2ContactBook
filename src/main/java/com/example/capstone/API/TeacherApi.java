package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.entityRequest.TeacherRequest;
import com.example.capstone.service.TeacherService;

@RestController
public class TeacherApi {

	@Autowired
	public TeacherService teacherService;

	@GetMapping("/v1/teacher")
	public List<TeacherEntity> getAll() {
		List<TeacherEntity> teacherList = teacherService.findAll();
		return teacherList;
	}

	@GetMapping("/v1/teacher/{id}")
	public TeacherEntity updateStudent(@PathVariable(value = "id") Integer id) {
		TeacherEntity dto = teacherService.findById(Long.valueOf(id));
		return dto;
	}

	@RequestMapping( value = "/v1/teacher/add", method= RequestMethod.POST ,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public TeacherEntity saveTeacher(TeacherRequest teacherRequest) {
		TeacherEntity teacherEntity = new TeacherEntity();
		BeanUtils.copyProperties(teacherRequest, teacherEntity);
		return teacherService.save(teacherEntity);
	}

	@DeleteMapping("/v1/teacher/{id}")
	public Boolean deleteStudent(@PathVariable(value = "id")Integer id) {
		boolean dto= teacherService.delete(Long.valueOf(id));
		return dto;
	}
	
}
