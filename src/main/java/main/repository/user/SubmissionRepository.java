package main.repository.user;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entity.user.Submission;


@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Long> {
	
	List<Submission> findByUserId(String userId);
	
	List<Submission> findByUserIdAndVerdict(String userId, String verdict);

	Optional<Submission> findById(String submissionId);
}
