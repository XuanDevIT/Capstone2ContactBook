package com.example.capstone.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.capstone.entity.FileData;

public interface FileDataRepository extends JpaRepository<FileData,Integer> {
    Optional<FileData> findByName(String fileName);
}
