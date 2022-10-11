package com.example.capstone.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SubjectController {

	@GetMapping("/subject")
	public String save() {

		return "subject/subject";

	}

	@GetMapping("/subject1")
	public String showInfoStudent() {

		return "redirect:/subject";
	}

	@GetMapping("/{id}")
	public String editStudent() {

		return "redirect:/subject";

	}

	@GetMapping("/delete/{id}")
	public String deleteStudent() {

		return "redirect:/subject";

	}
}
