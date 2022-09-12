//package com.example.capstone.API;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.capstone.entity.Teacher;
//import com.example.capstone.repository.TeacherRepository;
//
//@RestController
//public class TeacherApi {
//	
//	@Autowired
//	public TeacherRepository teacherRepository;
//	
//	@PostMapping("teacher/add")
//	public Teacher add(@RequestBody Teacher teacher) {
//		return teacherRepository.save(teacher);
//	}
//	
//	@PostMapping("teacher/add")
//	public ResponseEntity<Teacher> update(@RequestBody Teacher teacher) {
//		Teacher teacher2 = teacherRepository.save(teacher);
//		return new ResponseEntity<Teacher>(teacher2, HttpStatus.OK);
//	}
//	
//	@GetMapping("teacher/getAll")
//	public ResponseEntity<List<Teacher>> getAll() {
//		List<Teacher> teacherList = teacherRepository.findAll();
//		return new ResponseEntity<List<Teacher>>(teacherList, HttpStatus.OK);
//	}
//	
//	@GetMapping("teacher/get")
//	public ResponseEntity<Teacher> get(@RequestBody Long id) {
//		Teacher teacher = teacherRepository.getById(id);
//		return new ResponseEntity<Teacher>(teacher, HttpStatus.OK);
//	}
//}
