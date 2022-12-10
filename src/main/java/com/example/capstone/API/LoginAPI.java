package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.service.LoginService;
import com.example.capstone.service.TeacherService;



@RestController
public class LoginAPI {
	
	@Autowired
	LoginService loginService;
	
	@Autowired
	TeacherService teacherService;
	
	@GetMapping(value = "/v1/login/{user}/{pass}")
	public TeacherEntity login(@PathVariable("user") String user, @PathVariable("pass")  String pass) {
		List<TeacherEntity> list =  teacherService.findAll();
		TeacherEntity  teacherEntity;
		for(int i = 0; i < list.size(); i ++) {
			Boolean pass1 = list.get(i).getPassword().toString().equals(pass.toString());
			
			Boolean user1 = list.get(i).getUsername().toString().equals(user.toString());
			if(( pass1 && user1 )) {
				teacherEntity = list.get(i);
				return teacherEntity;
				
			}
		}
		return null;
	}

}
