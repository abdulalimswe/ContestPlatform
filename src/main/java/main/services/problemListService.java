package main.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.parsing.Problem;
import org.springframework.stereotype.Service;

import main.entity.problemSetub;
import main.repository.problemListRepository;

@Service
public class problemListService {
	@Autowired
	private problemListRepository plRepo;
	
	public problemSetub save(problemSetub p) {
		return plRepo.save(p);
	}
	
	public List<problemSetub> findAll(){
		return plRepo.findAll();
	}
	
	public problemSetub findById(Long id) {
		return plRepo.findById(id).get();
	}
	

	public problemSetub save(Long id, problemSetub p) {
		p.setId(id);
		return plRepo.save(p);
	}

	public void deleteById(Long id) {
		plRepo.deleteById(id);
		
	}

}
