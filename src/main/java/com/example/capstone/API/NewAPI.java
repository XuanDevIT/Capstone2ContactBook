package com.example.capstone.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.dto.NewDTO;
import com.example.capstone.service.INewService;

//@RestController = @Controller + @ResponseBody;
@RestController
public class NewAPI {
	
	@Autowired
	private INewService newService;
	
	//PostMapping =  @RequestMapping(value = "/test",method = RequestMethod.POST);
	//@ResponseBody
	@PostMapping(value = "/new")
	public NewDTO createNew(@RequestBody NewDTO model) {
		return newService.save(model);
	}
	
	@PutMapping(value = "/new")
	public NewDTO updateNew(@RequestBody NewDTO model) {
		return model;
	}
	
	@DeleteMapping(value = "/new")
	public void deleteNew(@RequestBody int[] id) {
		
	}

}
