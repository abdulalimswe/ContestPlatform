package main.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="viewProblem")

public class viewProblems {
	@Id
	private Long id;
	private String title;
	private String body;
	private String input;
	private String output;
	
	
	public viewProblems() {
		super();
		// TODO Auto-generated constructor stub
	}
	public viewProblems(Long id, String title, String body, String input, String output) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.input = input;
		this.output = output;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getInput() {
		return input;
	}
	public void setInput(String input) {
		this.input = input;
	}
	public String getOutput() {
		return output;
	}
	public void setOutput(String output) {
		this.output = output;
	}
	
	
	
}
