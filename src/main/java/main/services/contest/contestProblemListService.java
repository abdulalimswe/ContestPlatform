package main.services.contest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.entity.contest.contestProblemSetub;
import main.repository.contest.contestProblemListRepository;

@Service
public class contestProblemListService {
	
	 	@Autowired
	    private contestProblemListRepository contestProblemRepository;

	    public List<contestProblemSetub> getProblemsByContestId(Long contestId) {
	        return contestProblemRepository.findByContestsetubId(contestId);
	    }

//		public contestProblemSetub findById(Long id) {
//			return findById(id);
//		}
	
//	@Autowired
//	private contestProblemListRepository contestProRepo;
//	
//	public List<contestProblemSetub> getProblemsByContest(Long contestId) {
//        return contestProRepo.findProblemsByContestId(contestId);
//    }
	
//	public contestProblemSetub save(contestProblemSetub p) {
//		return contestProRepo.save(p);
//	}
//
//	public List<contestProblemSetub> findAll() {
//		return contestProRepo.findAll();
//	}
//	
	public contestProblemSetub findById(Long id) {
		return contestProblemRepository.findById(id).get();
	}
//	
//
//	public contestProblemSetub save(Long id, contestProblemSetub p) {
//		p.setId(id);
//		return contestProRepo.save(p);
//	}
//
//	public void deleteById(Long id) {
//		contestProRepo.deleteById(id);
//		
//	}
}
