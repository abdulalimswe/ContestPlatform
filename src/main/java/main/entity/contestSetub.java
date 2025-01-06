package main.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

import main.entity.contest.contestProblemSetub;



@Entity
@Table(name="contest")

public class contestSetub {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String name;
	private LocalDate date;
	private LocalTime time;
	private int duration;
	

	@OneToMany(mappedBy = "contestsetub", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference
	
	private List<contestProblemSetub> contestProblems;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}

	public contestSetub() {
		super();
		// TODO Auto-generated constructor stub
	}
	public List<contestProblemSetub> getContestProblems() {
		return contestProblems;
	}
	public void setContestProblems(List<contestProblemSetub> contestProblems) {
		this.contestProblems = contestProblems;
	}
	public contestSetub(Long id, String name, LocalDate date, LocalTime time, int duration,
			List<contestProblemSetub> contestProblems) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.time = time;
		this.duration = duration;
		this.contestProblems = contestProblems;
	}
	
	

}
