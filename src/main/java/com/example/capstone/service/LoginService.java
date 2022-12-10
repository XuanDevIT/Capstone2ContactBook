package com.example.capstone.service;

import org.springframework.stereotype.Service;

import com.example.capstone.entity.TeacherEntity;

@Service
public interface LoginService {

	public TeacherEntity login(String user, String pass);

}
