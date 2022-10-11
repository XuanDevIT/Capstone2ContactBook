package com.example.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.capstone.entity.TimeStudyEntity;

@Repository
public interface TimeStudyRepository extends JpaRepository<TimeStudyEntity, Long>{

}
