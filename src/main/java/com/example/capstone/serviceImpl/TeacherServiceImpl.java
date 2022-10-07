package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.repository.TeacherRepository;
import com.example.capstone.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService{
	
	@Autowired
	private TeacherRepository teacherRepository;

	@Override
	public TeacherEntity save(TeacherEntity teacher) {
		return teacherRepository.save(teacher);
	}

	@Override
	public List<TeacherEntity> findAll() {
		List<TeacherEntity> listTeacher = teacherRepository.findAll();
		return listTeacher;
	}

	@Override
	public TeacherEntity findById(Long id) {
		return teacherRepository.findById(id).get();
	}

	@Override
	public TeacherEntity update(TeacherEntity teacher) {
		return teacherRepository.save(teacher);
	}

	@Override
	public boolean delete(Long id) {
		TeacherEntity teacherEntity= new TeacherEntity();
		teacherEntity.setTeacherId(id);;
		try {
			teacherRepository.delete(teacherEntity);
			return true;
		} catch (Exception e) {
			return false;
		}

	}

}
