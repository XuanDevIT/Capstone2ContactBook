package com.example.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.entity.StudentSubject;
import com.example.capstone.entity.StudentSubjectKey;

@Repository
public interface StudentSubjectRepository extends JpaRepository<StudentSubject, StudentSubjectKey> {
	
}
