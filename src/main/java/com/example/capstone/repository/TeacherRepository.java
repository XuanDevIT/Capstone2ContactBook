package com.example.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.entity.TeacherEntity;

@Repository
public interface TeacherRepository extends JpaRepository<TeacherEntity, Long> {
	
}
