package main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import main.entity.contestSetub;
import main.entity.contest.contestProblemSetub;
import main.repository.contestListRepository;

@Service
public class contestListService {
	
	@Autowired
	private contestListRepository contestRepo;

	public contestSetub save(contestSetub p) {
		return contestRepo.save(p);
	}


	public List<contestSetub> findAll() {
		return contestRepo.findAll();
	}


	public contestSetub findById(Long id) {
		return contestRepo.findById(id).get();
	}
	

	public contestSetub save(Long id, contestSetub p) {
		p.setId(id);
		return contestRepo.save(p);
	}

	public void deleteById(Long id) {
		contestRepo.deleteById(id);
		
	}


//	public List<contestProblemSetub> getProblemsByContest(Long contestId) {
//		return contestRepo.getContestProblems(contestId);
//	}
	
}
