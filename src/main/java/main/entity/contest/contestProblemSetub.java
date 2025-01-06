package main.entity.contest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import main.entity.contestSetub;

@Entity
@Table(name="contestproblem")

public class contestProblemSetub {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String body;
	private String input;
	private String output;
	private String notes;
	private String testcaseInput;
	private String testcaseOutput;
	private String datasetInput;
	private String datasetOutput;
	
	@ManyToOne
	@JoinColumn(name = "contest_id", nullable = false)
	@JsonBackReference
	private contestSetub contestsetub;
	
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
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getTestcaseInput() {
		return testcaseInput;
	}
	public void setTestcaseInput(String testcaseInput) {
		this.testcaseInput = testcaseInput;
	}
	public String getTestcaseOutput() {
		return testcaseOutput;
	}
	public void setTestcaseOutput(String testcaseOutput) {
		this.testcaseOutput = testcaseOutput;
	}
	public String getDatasetInput() {
		return datasetInput;
	}
	public void setDatasetInput(String datasetInput) {
		this.datasetInput = datasetInput;
	}
	public String getDatasetOutput() {
		return datasetOutput;
	}
	public void setDatasetOutput(String datasetOutput) {
		this.datasetOutput = datasetOutput;
	}
	public contestProblemSetub(Long id, String title, String body, String input, String output, String notes,
			String testcaseInput, String testcaseOutput, String datasetInput, String datasetOutput) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.input = input;
		this.output = output;
		this.notes = notes;
		this.testcaseInput = testcaseInput;
		this.testcaseOutput = testcaseOutput;
		this.datasetInput = datasetInput;
		this.datasetOutput = datasetOutput;
	}
	public contestProblemSetub() {
		super();
		// TODO Auto-generated constructor stub
	}
	public contestSetub getContestsetub() {
		return contestsetub;
	}
	public void setContestsetub(contestSetub contestsetub) {
		this.contestsetub = contestsetub;
	}
	public contestProblemSetub(Long id, String title, String body, String input, String output, String notes,
			String testcaseInput, String testcaseOutput, String datasetInput, String datasetOutput,
			contestSetub contestsetub) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.input = input;
		this.output = output;
		this.notes = notes;
		this.testcaseInput = testcaseInput;
		this.testcaseOutput = testcaseOutput;
		this.datasetInput = datasetInput;
		this.datasetOutput = datasetOutput;
		this.contestsetub = contestsetub;
	}
	
	
	
	
}
