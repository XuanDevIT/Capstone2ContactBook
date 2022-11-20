package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.dto.StudentWithSubjectDTO;
import com.example.capstone.entity.StudentEntity;
import com.example.capstone.service.StudentService;
@RestController
public class StudentAPI {

	@Autowired
	private StudentService studentService;

	//PostMapping =  @RequestMapping(value = "/test",method = RequestMethod.POST);
	//@ResponseBody

	@PostMapping(value = "/v1/student")
	public StudentEntity createNew(@RequestBody StudentEntity model) {
		return studentService.save(model);
	}

	@GetMapping("/v1/student/{id}")
	public ResponseEntity<StudentEntity> updateStudent(@PathVariable(value = "id")Long id) {
		StudentEntity dto= studentService.findByID(id);
		return ResponseEntity.ok(dto);

	}
	
	@GetMapping("/v1/student")
	public ResponseEntity<List<StudentEntity>> getAll() {
		List<StudentEntity> dto= studentService.findAll();
		return ResponseEntity.ok(dto);

	}
	
	@DeleteMapping("/v1/student/{id}")
	public ResponseEntity<Boolean> deleteStudent(@PathVariable(value = "id")Long id) {
		boolean dto= studentService.delete(id);
		return ResponseEntity.ok(dto);
	}
	
	@GetMapping("student/getall")
	public ResponseEntity<List<StudentWithSubjectDTO>> select() {
		List<StudentWithSubjectDTO> objs = studentService.selectStudentWithSubject();
		return new ResponseEntity<List<StudentWithSubjectDTO>>(objs, HttpStatus.OK);
	}
}
