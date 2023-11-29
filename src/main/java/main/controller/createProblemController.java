package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class createProblemController {
	
	@PostMapping("/problem")
	public String problem(@RequestParam String title, @RequestParam String body, @RequestParam String input, @RequestParam String output, Model m, RedirectAttributes ra){
		
		
		return "problem.html";
	}
}
