package com.example.capstone.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "time_study")
public class TimeStudyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "time_study_id")
	private Long timeStudyId;

	private Date timeStudyDay;
	private String timeStudyHourStart;
	private String timeStudyHourEnd;
	
	//@JsonIgnore
	@OneToMany(mappedBy = "timeStudy", fetch = FetchType.LAZY)
	private List<AttendanceEntity> attendance;

	//@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "classStudyId")
	private ClassStudyEntity classStudyId;
}