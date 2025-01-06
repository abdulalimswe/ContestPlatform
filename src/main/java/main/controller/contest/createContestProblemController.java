package main.controller.contest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import main.entity.contest.contestProblemSetub;
import main.services.contest.contestProblemListService;

@RestController
@CrossOrigin(origins = "*")
public class createContestProblemController {
	
	@Autowired
    private contestProblemListService contestProblemService;

    @GetMapping("/{contestId}/contestProblems")
    public List<contestProblemSetub> getContestProblems(@PathVariable Long contestId) {
        return contestProblemService.getProblemsByContestId(contestId);
    }
//	
//	@PostMapping("/saveContestProblem")
//	contestProblemSetub addContestProblem(@RequestBody contestProblemSetub p) {
//		return service.save(p);
//	}
//	
//	@GetMapping("/contestProblems")
//    public List<contestProblemSetub> getAllContestProblems() {
//        return service.findAll();
//    }
//    
    @GetMapping("/getContestProblem/{id}")
    contestProblemSetub getContestProblemById(@PathVariable Long id) {
		return contestProblemService.findById(id);
	}
//    
////    @GetMapping("/getContest/{id}/problems")
////    public List<contestProblemSetub> getProblemsByContest(@PathVariable Long id) {
////        return service.getProblemsByContest(id);
////    }
////	
//	@PutMapping("/updateContestProblem")
//	contestProblemSetub updateContestProblemById(@RequestParam Long id, @RequestBody contestProblemSetub p) {
//		return service.save(p);
//	}
//	
//	@DeleteMapping("/deleteContestProblem")
//	void deleteContestProblemById(@RequestParam Long id){
//		service.deleteById(id);
//	}
	
}
