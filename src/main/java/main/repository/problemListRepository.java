package main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entity.problemSetub;
@Repository
public interface problemListRepository extends JpaRepository<problemSetub,Long> {

}
