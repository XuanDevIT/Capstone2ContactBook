package com.example.capstone.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Attendence")
public class AttendenceEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long attendenceId;
	private Date date;
	private String status;
	private String note;
	
	@OneToMany(mappedBy="attendenceEntity")
    private Set<ClassStudyEntity> classStudyEntity;
	
}
