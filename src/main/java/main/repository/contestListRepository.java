package main.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import main.entity.contestSetub;

@Repository
public interface contestListRepository extends JpaRepository<contestSetub, Long> {



}
