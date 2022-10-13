package com.example.capstone.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Subject")
public class SubjectEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long subjectID;
	private String subjectName;

	@ManyToMany
	@JoinTable(name = "teach_subject", joinColumns = @JoinColumn(name = "teach_id"), inverseJoinColumns = @JoinColumn(name = "subject_id"))
	List<TeacherEntity> teacherEntities;

	@JsonIgnore
	@OneToMany(mappedBy = "subjectID", fetch = FetchType.LAZY)
	private Set<TimeStudyEntity> studyEntities;
}
