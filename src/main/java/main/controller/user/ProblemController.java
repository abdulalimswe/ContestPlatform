package main.controller.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import lombok.RequiredArgsConstructor;
import main.entity.user.Problem;
import main.exception.ResourceNotFoundException;
import main.repository.user.ProblemRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/problem")
@RequiredArgsConstructor
public class ProblemController {
	
	@Autowired
	private ProblemRepository problemRepository;
	
	@GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Problem> findAll() {
        return problemRepository.findAll();
    }
	
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createProblem(@RequestBody Problem problem) {
        problemRepository.save(problem);
    }
    
    @GetMapping("/{id}")
	public Problem getProblemById(@PathVariable(value = "id") String problemId) {
	    return problemRepository.findById(problemId)
	            .orElseThrow(() -> new ResourceNotFoundException("Problem", "id", problemId));
	}

    @GetMapping("/name/{name}")
    public Problem getProblemByName(@PathVariable(value = "name") String problemName) {
        return problemRepository.findByName(problemName)
                .orElseThrow(() -> new ResourceNotFoundException("Problem", "name", problemName));
    }
}
