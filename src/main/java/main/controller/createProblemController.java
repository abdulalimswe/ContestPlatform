package main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.parsing.Problem;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.entity.problemSetub;
import main.services.problemListService;

@RestController
@CrossOrigin(origins = "*")
public class createProblemController {
	
	@Autowired
	private problemListService service;
	
	
	@PostMapping("/save")
	problemSetub addProblem(@RequestBody problemSetub p ) {
		return service.save(p);
	}
	
	@GetMapping("/problems")
	List<problemSetub> getAllProblems(){
		return service.findAll();
	}
	
	@GetMapping("/get/{id}")
	problemSetub getProblemById(@PathVariable Long id) {
		return service.findById(id);
	}
	
	@PutMapping("/update")
	problemSetub updateProblemById(@RequestParam Long id, @RequestBody problemSetub p) {
		return service.save(id,p);
	}
	
	@DeleteMapping("/delete")
	void deleteProblemById(@RequestParam Long id){
		service.deleteById(id);
	}
	
	
}
