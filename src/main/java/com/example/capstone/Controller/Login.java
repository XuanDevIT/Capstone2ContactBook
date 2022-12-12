package com.example.capstone.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class Login {
	
	@GetMapping("")
	public String Login() {
		return "/teacher/login";
	}

}
