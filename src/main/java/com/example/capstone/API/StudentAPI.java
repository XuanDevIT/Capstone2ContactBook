package com.example.capstone.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.dto.NewStudentDTO;
import com.example.capstone.service.StudentService;
@RestController
public class StudentAPI {

	@Autowired
	private StudentService studentService;
	
	//PostMapping =  @RequestMapping(value = "/test",method = RequestMethod.POST);
	//@ResponseBody
	
	@PostMapping(value = "/student")
	@CrossOrigin(origins = "http://127.0.0.1:5500")
	public NewStudentDTO createNew(@RequestBody NewStudentDTO model) {
		return studentService.save(model);
	}
}
