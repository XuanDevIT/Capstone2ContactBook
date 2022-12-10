package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.repository.TeacherRepository;
import com.example.capstone.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	TeacherRepository teacherRepository;

	@Override
	public TeacherEntity login(String user, String pass) {
		
		List<TeacherEntity> list =  teacherRepository.findAll();
		for(int i = 0; i < list.size(); i ++) {
			String user1 = list.get(i).getUsername().toString();
			String pass1 = list.get(i).getPassword().toString();
			if(list.get(i).getUsername().toString() == user && list.get(i).getPassword().toString() == pass) {
				return list.get(i);
			}
		}
		return null;
		
	}

}
