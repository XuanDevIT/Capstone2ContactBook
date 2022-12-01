package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.dto.ClassStudyDTO;
import com.example.capstone.entity.ClassStudyEntity;
import com.example.capstone.repository.ClassStudyRepository;
import com.example.capstone.service.ClassStudyService;

@Service
public class ClassStudyServiceImpl implements ClassStudyService {
	
	@Autowired
	private ClassStudyRepository classStudyRepository;
	
	@Override
	public ClassStudyEntity save(ClassStudyEntity classStudyEntity) {
		return classStudyRepository.save(classStudyEntity);
	}

	@Override
	public int delete(Long id) {
		try {
			classStudyRepository.deleteById(id);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}
	
	@Override
	public List<ClassStudyEntity> getAllClassStudy() {
		return classStudyRepository.findAll();
	}

	@Override
	public ClassStudyDTO findClassStudyById(Long id) {
		return classStudyRepository.getClassStudyById(id);
	}
	
	@Override
	public List<ClassStudyDTO> getClassStudyByTeacherId(Long id) {
		return classStudyRepository.getClassStudyByTeacherId(id);
	}

	@Override
	public List<ClassStudyDTO> getAllClassStudyDTO() {
		return classStudyRepository.getClassStudy();
	}

	@Override
	public ClassStudyEntity findByCLassStudy(Long classStudyId) {
		return classStudyRepository.findById(classStudyId).get();
	}
}
