package com.example.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.entity.SubjectEntity;

@Repository
public interface SubjectRepository extends JpaRepository<SubjectEntity, Long>{

}
