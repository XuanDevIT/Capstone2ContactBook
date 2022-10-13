//package com.example.capstone.Controller;
//
//import javax.validation.Valid;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.example.capstone.entity.StudentEntity;
//
//@Controller
//@RequestMapping(value = "/student")
//public class StudenController {
//
//	//@Autowired
//	//private StudentService studentService;
//
//	@GetMapping
//	public String addStudent(Model model) {
//		StudentEntity studentEntity = new StudentEntity();
//		model.addAttribute("student", studentEntity);
//		return "addStudent";
//	}
//
//	@PostMapping
//	public String save(@Valid @ModelAttribute("student") StudentEntity studentEntity, BindingResult result) {
////		if (result.hasErrors()) {
////			return "addStudent";
////		}
//		//studentService.save(studentEntity);
//		return "redirect:/teacher/showInfoStudent";
//
//	}
//
//	@GetMapping("/showInfoStudent")
//	public String showInfoStudent(Model model) {
//		//model.addAttribute("infoStudent",studentService.findAll());
//		return "teacher/showInfoStudent";
//	}
//
//	@GetMapping("/{id}")
//	public String editStudent(@PathVariable(value = "id") Long id, Model model) {
//		//model.addAttribute("student", studentService.findByID(id));
//		return "addStudent";
//
//	}
//
//	@GetMapping("/delete/{id}")
//	public String deleteStudent(@PathVariable(value = "id") Long id, Model model) {
//		//model.addAttribute("student", studentService.delete(id));
//		return "redirect:/teacher/showInfoStudent";
//
//	}
//}
