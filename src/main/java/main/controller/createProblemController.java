package main.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import main.entity.problemSetub;
import main.services.problemListService;
import main.services.viewProblemsService;

import java.util.*;
/*import antlr.collections.List;
import main.entity.problemSetub;
import main.services.problemListService;*/
import main.entity.viewProblems;

@Controller
public class createProblemController {
	@Autowired
	private problemListService service;
	
	@Autowired
	private viewProblemsService myProblemService;
	
	@GetMapping("/createProblem")
	public String createProblem() {
		return "createProblem.html";
	}
	@GetMapping("/problem")
	public ModelAndView getAllProblem() {
		List<problemSetub>list=service.getAllProblem();
		
		return new ModelAndView("problem","problem",list);
	}
	
	@PostMapping("/save")
	public String addProblem(@ModelAttribute problemSetub p){
			service.save(p);
			return "redirect:/problem";
	}
	
	/* view Problems */
	@GetMapping("/viewProblems")
	public String viewProblems(Model model){
		List<viewProblems>list = myProblemService.getAllViewProblems();
		model.addAttribute("problem",list);
		return "viewProblems.html";
	}
	@RequestMapping("/viewProblems/{id}")
	public String getViewProblems(@PathVariable("id") int id, RedirectAttributes ra) {
		
		problemSetub p = service.getProblemSetubById((long)id);
		ra.addFlashAttribute("view_title", p.getTitle());
		ra.addFlashAttribute("view_body", p.getBody());
		ra.addFlashAttribute("view_input", p.getInput());
		ra.addFlashAttribute("view_output", p.getOutput());
			
		return "redirect:/viewProblems";
	}
	
	/*
	 * @RequestMapping("/viewProblems/{id}") public String
	 * getViewProblems(@PathVariable("id") int id) { problemSetub p =
	 * service.getProblemSetubById((long)id);
	 * 
	 * viewProblems vp = new
	 * viewProblems(p.getId(),p.getTitle(),p.getBody(),p.getInput(),p.getOutput());
	 * myProblemService.saveViewProblems(vp);
	 * 
	 * return "redirect:/viewProblems"; }
	 */
}
