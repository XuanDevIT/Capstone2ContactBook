package com.example.capstone.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "ClassStudent")
@Data
public class ClassStudyEntity {

	@EmbeddedId
	private ClassKey classKey;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @MapsId("attendenceId")
    @JoinColumn(name = "attendenceId")
    AttendenceEntity attendenceEntity;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("studentId")
    @JoinColumn(name = "studentId")
    StudentEntity studentEntity;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("subjectId")
    @JoinColumn(name = "subjectId")
    SubjectEntity subjectEntity;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("teacherId")
    @JoinColumn(name = "teacherId")
    Teacher teacherEntity;
}
