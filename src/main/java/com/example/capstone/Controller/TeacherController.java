package com.example.capstone.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.capstone.entity.Teacher;
import com.example.capstone.service.TeacherService;

@Controller
public class TeacherController {
	@Autowired
	private TeacherService teacherService;
	
	@GetMapping("/teacher")
	public String view(Model model, Teacher teacher) {
		List<Teacher> teacherList = teacherService.findAll();
		model.addAttribute("teacherList", teacherList);
		return "administrator/teacherTransaction";
	}
//	@PostMapping("/teacher/add")
//	public String addTeacher(Model model) {
//		Teacher Teacher = new Teacher();
//		model.addAttribute("teacher", Teacher);
//		return "redirect:/teacher";
//	}

	@PostMapping("/teacher/add")
	public String save(@Valid @ModelAttribute("teacher") Teacher Teacher, BindingResult result) {
		teacherService.save(Teacher);
		return "redirect:/teacher";
	}
	
	@GetMapping("teacher/delete/{id}")
	public String delete(@PathVariable Long id) {
		teacherService.delete(id);
		return "redirect:/teacher";
	}
	
	@GetMapping("/teacher/{id}")
	public String updateTeacher(@PathVariable("id") Long id, Model model) {
		model.addAttribute("teacher", teacherService.findById(id));
		return "addTeacher";
	}
}
