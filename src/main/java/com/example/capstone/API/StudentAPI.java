package com.example.capstone.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@PostMapping(value = "/v1/student")
	public NewStudentDTO createNew(@RequestBody NewStudentDTO model) {
		return studentService.save(model);
	}

//	@GetMapping(value= "/student")
//	@CrossOrigin(origins = "http://127.0.0.1:5500")
//	public ResponseEntity<String> findAll(){
//		return ResponseEntity.ok("ok") ;
//	}

	@GetMapping("/v1/student/{id}")
	public ResponseEntity<NewStudentDTO> updateStudent(@PathVariable(value = "id")Long id) {
		NewStudentDTO dto= studentService.findByID(id);
		return ResponseEntity.ok(dto);

	}
}
