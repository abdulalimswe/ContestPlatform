package main.repository.contest;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entity.contest.contestProblemSetub;
@Repository
public interface contestProblemListRepository extends JpaRepository<contestProblemSetub,Long> {
	
	List<contestProblemSetub> findByContestsetubId(Long contestId);

}
