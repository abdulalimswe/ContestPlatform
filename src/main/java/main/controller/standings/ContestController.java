package main.controller.standings;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContestController {

    @GetMapping("/api/standings")
    public List<Contestant> getStandings() {
        List<Contestant> standings = new ArrayList<>();

        // Mock data (Replace with data from the database)
        standings.add(new Contestant(1, "Andrew", "ID: 221-35-1043 | SWE",
                List.of(new Problem(true, 397), new Problem(true, 58), new Problem(true, 38),new Problem(true, 397), new Problem(true, 58), new Problem(true, 38)), 1200));
        standings.add(new Contestant(2, "David", "ID: 221-35-XXXX | SWE",
                List.of(new Problem(true, 480), new Problem(false, 0), new Problem(true, 38),new Problem(true, 397), new Problem(true, 58), new Problem(true, 38)), 1000));

        return standings;
    }
}

class Contestant {
    private int rank;
    private String name;
    private String details;
    private List<Problem> problems;
    private int score;

  
    // Getters and setters here...

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public List<Problem> getProblems() {
		return problems;
	}

	public void setProblems(List<Problem> problems) {
		this.problems = problems;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}
	public Contestant(int rank, String name, String details, List<Problem> problems, int score) {
		super();
		this.rank = rank;
		this.name = name;
		this.details = details;
		this.problems = problems;
		this.score = score;
	}

	public Contestant() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}

class Problem {
    private boolean solved;
    private int time;

    
    // Getters and setters here...

	public boolean isSolved() {
		return solved;
	}

	public void setSolved(boolean solved) {
		this.solved = solved;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}
	public Problem(boolean solved, int time) {
		super();
		this.solved = solved;
		this.time = time;
	}

	public Problem() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
    
}
