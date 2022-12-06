package com.example.capstone.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.capstone.entity.ImageData;
import com.example.capstone.entity.StudentEntity;
import com.example.capstone.repository.StorageRepository;
import com.example.capstone.util.ImageUtils;

@Service
public class StorageService {

	@Autowired
	private StorageRepository repository;

	public String uploadImage(MultipartFile[] file, StudentEntity studentEntity) throws IOException {

		for (int i = 0; i < file.length; i++) {
			System.out.print(file.length);
			ImageData imageData = repository.save(ImageData.builder().name(file[i].getOriginalFilename())
					.type(file[i].getContentType()).imageDataStudent(studentEntity)
					.imageData(ImageUtils.compressImage(file[i].getBytes())).build()

			);

//            if (imageData != null) {
//                return "file uploaded successfully : " + file[i].getOriginalFilename();
//            }
		}
		return "file uploaded successfully!";
	}

	public byte[] downloadImage(String fileName) {
		Optional<ImageData> dbImageData = repository.findByName(fileName);
		byte[] images = ImageUtils.decompressImage(dbImageData.get().getImageData());
		return images;
	}

	public byte[] getByID(Long id) {
		Optional<ImageData> imOptional = repository.findById(id);
		byte[] images = ImageUtils.decompressImage(imOptional.get().getImageData());
		return images;
	}

	public List<byte[]> getAll(){
		List<ImageData> list = repository.findAll();
		
		List<byte[]> listImg = new ArrayList<byte[]>();
		for(int i = 0; i < list.size(); i ++) {
			byte[] img = ImageUtils.decompressImage(list.get(i).getImageData());
			listImg.add(img);
		}
		
		return listImg;
		
		
	}	
}
