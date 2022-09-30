package com.example.capstone.Controller;

import org.springframework.stereotype.Controller;

@Controller
public class TeacherController {
//	@Autowired
//	private TeacherService teacherService;
//	
//	@GetMapping("/teacher1")
//	public String view(Model model, TeacherEntity teacher) {
////		List<TeacherEntity> teacherList = teacherService.findAll();
////		model.addAttribute("teacherList", teacherList);
//		return "administrator/teacherTransaction";
//	}
////	@PostMapping("/teacher/add")
////	public String addTeacher(Model model) {
////		Teacher Teacher = new Teacher();
////		model.addAttribute("teacher", Teacher);
////		return "redirect:/teacher";
////	}
//
//	@PostMapping("/teacher/add1")
//	public String save(@Valid @ModelAttribute("teacher") TeacherEntity Teacher, BindingResult result) {
//		//teacherService.save(Teacher);
//		return "redirect:/teacher";
//	}
//	
//	@GetMapping("teacher/delete/{id}")
//	public String delete(@PathVariable Long id) {
//		//teacherService.delete(id);
//		return "redirect:/teacher";
//	}
//	
//	@GetMapping("/teacher/{id}")
//	public String updateTeacher(@PathVariable("id") Long id, Model model) {
//		//model.addAttribute("teacher", teacherService.findById(id));
//		return "addTeacher";
//	}
}
