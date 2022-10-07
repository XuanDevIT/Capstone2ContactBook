package com.example.capstone.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.service.TeacherService;

@RestController
public class TeacherApi {

	@Autowired
	public TeacherService teacherService;

	@PostMapping("/v1/teacher")
	public TeacherEntity add(@RequestBody TeacherEntity teacher) {
		return teacherService.save(teacher);
	}

//	@PostMapping("teacher")
//	public ResponseEntity<TeacherEntity> update(@RequestBody TeacherEntity teacher) {
//		TeacherEntity teacher2 = teacherRepository.save(teacher);
//		return new ResponseEntity<TeacherEntity>(teacher2, HttpStatus.OK);
//	}

	@GetMapping("/v1/teacher")
	public List<TeacherEntity> getAll() {
		List<TeacherEntity> teacherList = teacherService.findAll();
		return teacherList;
	}

	@GetMapping("/v1/teacher/{id}")
	public TeacherEntity updateStudent(@PathVariable(value = "id") Integer id) {
		TeacherEntity dto = teacherService.findById(Long.valueOf(id));
		return dto;
	}
	

//	@DeleteMapping("/v1/teacher")
//	public boolean deleteTeacher(@RequestBody Long id) {
//		boolean teacherDelete = teacherService.delete(id);
//		return teacherDelete;
//	}
	@DeleteMapping("/v1/teacher/{id}")
	public Boolean deleteStudent(@PathVariable(value = "id")Integer id) {
		boolean dto= teacherService.delete(Long.valueOf(id));
		return dto;
	}
	
//	//@DeleteMapping("v1/teacher")
//	public boolean deleteTeacher(@RequestBody Integer[] id) {
//        try {
//            for (int i = 0; i < id.length; i++) {
//                teacherService.delete(Long.valueOf(id[i]));
//            }
//            return true;
//        } catch (Exception e) {
//            return false;
//        }
//
//    }
	
}
