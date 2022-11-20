package com.example.capstone.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capstone.entity.SubjectEntity;
import com.example.capstone.entity.TeacherEntity;
import com.example.capstone.repository.SubjectRepository;
import com.example.capstone.service.SubjectService;

@Service
public class SubjectSevicelmpl implements SubjectService {
	@Autowired
	SubjectRepository subjectRepository;

	@Override
	public SubjectEntity save(SubjectEntity subjectEntity) {

		return subjectRepository.save(subjectEntity);
	}

	@Override
	public SubjectEntity findById(Long id) {
		return subjectRepository.findById(id).get();
	}

	@Override
	public List<SubjectEntity> findAll() {
		return subjectRepository.findAll();
	}

	@Override
	public boolean delete(Long Id) {

		try {
			subjectRepository.deleteById(Id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public SubjectEntity subSave(Long teacherId, Long subjectId) {
		// TODO Auto-generated method stub
		SubjectEntity subjectEntity = subjectRepository.findById(Long.valueOf(subjectId)).get();
		
		//List tgList= subjectRepository.tg();
		
		TeacherEntity tcEntity= new TeacherEntity();
		tcEntity.setTeacherId(Long.valueOf(teacherId));	
		
		List<TeacherEntity> nEntities = subjectEntity.getTeacherEntities();	
		
			
		nEntities.add(tcEntity);
		
		subjectEntity.setTeacherEntities(nEntities);
		
		subjectRepository.save(subjectEntity);
				
		return null;
	}

}
