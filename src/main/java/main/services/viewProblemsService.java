package main.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.entity.viewProblems;
import main.repository.viewProblemsRepository;

@Service
public class viewProblemsService {
	@Autowired
	private viewProblemsRepository vpRepo;
	
	public void saveViewProblems(viewProblems vp) {
		vpRepo.save(vp);
	}
	
	public List<viewProblems> getAllViewProblems(){
		return vpRepo.findAll();
	}
	
}
