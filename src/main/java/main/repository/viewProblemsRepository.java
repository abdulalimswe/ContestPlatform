package main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entity.viewProblems;
@Repository
public interface viewProblemsRepository extends JpaRepository<viewProblems,Long> {


}
