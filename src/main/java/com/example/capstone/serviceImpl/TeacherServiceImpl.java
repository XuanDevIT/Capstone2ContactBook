package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.Teacher;
import com.example.capstone.repository.TeacherRepository;
import com.example.capstone.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService{
	
	@Autowired
	private TeacherRepository teacherRepository;

	@Override
	public Teacher save(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	@Override
	public List<Teacher> findAll() {
		List<Teacher> listTeacher = teacherRepository.findAll();
		return listTeacher;
	}

	@Override
	public Teacher findById(Long id) {
		return teacherRepository.getById(id);
	}

	@Override
	public Teacher update(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	@Override
	public void delete(Long id) {
		teacherRepository.deleteById(id);
	}

}
