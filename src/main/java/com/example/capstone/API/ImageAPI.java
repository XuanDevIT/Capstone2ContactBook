package com.example.capstone.API;

import java.io.IOException;
import java.util.List;

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
import com.example.capstone.repository.StorageRepository;
import com.example.capstone.service.StorageService;
import com.example.capstone.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ImageAPI {
	@Autowired
	private StorageService service;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private StorageRepository storageRepository;
	
	@PostMapping("/v1/image")
	public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile[] file, @RequestParam("student") String model) throws IOException {
		System.out.print(file.length);
		 ObjectMapper objectMapper = new ObjectMapper();
		 StudentEntity studentEntity = objectMapper.readValue(model, StudentEntity.class);
		 studentService.save(studentEntity);
		 String uploadImage = service.uploadImage(file, studentEntity);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}

	@GetMapping("/v1/image/{fileName}")
	public ResponseEntity<?> downloadImage(@PathVariable String fileName){
		byte[] imageData=service.downloadImage(fileName);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/png"))
				.body(imageData);

	}
	
	@GetMapping("/v1/image")
	public ResponseEntity<?> show(){
		
		List<byte[]> imageData = service.getAll();
		
		return new ResponseEntity<List<byte[]>>(imageData, HttpStatus.OK);

	}
	
	@GetMapping("/v1/image/getID/{id}")
	public ResponseEntity<?> getByID(@PathVariable Long id){
		byte[] imageData=service.getByID(id);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/png"))
				.body(imageData);
	}

}
