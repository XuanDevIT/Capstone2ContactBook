package com.example.capstone.API;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.capstone.entity.StudentEntity;
import com.example.capstone.service.StorageService;
import com.example.capstone.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class FileDataAPI {

	@Autowired
	private StorageService service;
	
	@Autowired StudentService studentService;

	@PostMapping("/v1/fileSystem")
	public ResponseEntity<?> uploadImageToFIleSystem(@RequestParam("image") MultipartFile[] file,
			@RequestParam("student") String model) throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		StudentEntity studentEntity = objectMapper.readValue(model, StudentEntity.class);
		studentService.save(studentEntity);
		String uploadImage = service.uploadImageToFileSystem(file, studentEntity);
		return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
	}

	@GetMapping("/v1/fileSystem/{fileName}")
	public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
		byte[] imageData = service.downloadImageFromFileSystem(fileName);
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(imageData);

	}
}
