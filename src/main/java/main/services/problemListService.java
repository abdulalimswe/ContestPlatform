package main.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.entity.problemSetub;
import main.repository.problemListRepository;

@Service
public class problemListService {
	@Autowired
	private problemListRepository plRepo;
	
	public void save(problemSetub p) {
		plRepo.save(p);
	}
	
	public List<problemSetub> getAllProblem(){
		return plRepo.findAll();
	}
	
	public problemSetub getProblemSetubById(Long id) {
		return plRepo.findById(id).get();
	}

}
