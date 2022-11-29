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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.capstone.entity.ImageData;
import com.example.capstone.entity.StudentEntity;
import com.example.capstone.repository.StorageRepository;
import com.example.capstone.service.StorageService;

@RestController
public class ImageAPI {
	@Autowired
	private StorageService service;

	@Autowired
	StorageRepository repository;
	
	@PostMapping("/v1/image")
	public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file, @RequestBody StudentEntity model) throws IOException {
		Long aLong= 1L;
		String uploadImage = service.uploadImage(file, model);
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
		
		List<ImageData> imageData = repository.findAll();
		
		return new ResponseEntity<List<ImageData>>(imageData, HttpStatus.OK);

	}

}
