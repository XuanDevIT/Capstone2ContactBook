package com.example.capstone.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.capstone.dto.NewStudentDTO;
import com.example.capstone.service.StudentService;

@Controller
@RequestMapping(value = "/student")
public class StudenController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping
	public String addStudent(Model model) {
		NewStudentDTO eDto = new NewStudentDTO();
		model.addAttribute("student", eDto);  
		return "addStudent";
	}
	
	@PostMapping
	public String save( @Valid  @ModelAttribute("student") NewStudentDTO studentDTO,BindingResult result) {
		if(result.hasErrors()) {
			return "addStudent";
		}
		studentService.save(studentDTO);
		return "index";
		
	}
}
