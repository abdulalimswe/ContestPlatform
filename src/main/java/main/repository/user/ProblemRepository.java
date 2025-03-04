package main.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entity.user.Problem;

import java.util.Optional;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {

	Optional<Problem> findById(String problemId);

	Optional<Problem> findByName(String problemName);

}