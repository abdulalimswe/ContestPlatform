package main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.entity.contestSetub;
import main.entity.problemSetub;
import main.services.contestListService;

@RestController
@CrossOrigin(origins = "*")

public class createContestController {
	
	@Autowired
	private contestListService service;
	
	 public createContestController(contestListService service) {
	        this.service = service;
	 }
	
	@PostMapping("/saveContest")
	contestSetub addContest(@RequestBody contestSetub p) {
		return service.save(p);
	}
	
	@GetMapping("/contests")
    public List<contestSetub> getAllContests() {
        return service.findAll();
    }
    
    @GetMapping("/getContest/{id}")
	contestSetub getContestById(@PathVariable Long id) {
		return service.findById(id);
	}
	
	@PutMapping("/updateContest")
	contestSetub updateContestById(@RequestParam Long id, @RequestBody contestSetub p) {
		return service.save(id,p);
	}
	
	@DeleteMapping("/deleteContest")
	void deleteContestById(@RequestParam Long id){
		service.deleteById(id);
	}
	
}
