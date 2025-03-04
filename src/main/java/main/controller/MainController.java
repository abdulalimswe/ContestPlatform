//package main.controller;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//@Controller
//public class MainController {
//	
//	@GetMapping("/")
//	public String HomePage() {
//		return "index";
//	}
//	
//	@GetMapping("/login")
//	public String login() {
//		return "login.html";
//	}
//	
//	@GetMapping("/register")
//	public String register() {
//		return "register";
//	}
//	@PostMapping("/login")
//	public String postRegister(@RequestParam String regName,@RequestParam String regEmail, @RequestParam String regPassword,@RequestParam String regConPassword, Model m, RedirectAttributes ra) {
//		if(regName.equals("")) {
//			ra.addFlashAttribute("warningRegName","You must enter your Name");
//			return "redirect:/register/";
//		}
//		if(regEmail.equals("")) {
//			ra.addFlashAttribute("warningRegEmail","You must enter your Email");
//			return "redirect:/register/";
//		}
//		if(regPassword.equals("")) {
//			ra.addFlashAttribute("warningRegPass","You must enter your Password");
//			return "redirect:/register/";
//		}
//		if(regConPassword.equals("")) {
//			ra.addFlashAttribute("warningRegConPass","You must enter your Confirm Password");
//			return "redirect:/register/";
//		}
//		if(!regConPassword.equals(regPassword)) {
//			ra.addFlashAttribute("warningRegPassNotSame","Your Password Doesn't Match");
//			return "redirect:/register/";
//		}
//		return "login.html";
//	}
//	@GetMapping("/profile")
//	public String profile() {
//		return "profile";
//	}
//	
//	@PostMapping("/profile")
//	public String profile(@RequestParam String email, @RequestParam String password, Model m, RedirectAttributes ra) {
//		if(email.equals("")) {
//			ra.addFlashAttribute("warning","You must enter your mail");
//			return "redirect:/login/";
//		}
//		if(password.equals("")) {
//			ra.addFlashAttribute("warningPass","You must enter your Password");
//			return "redirect:/login/";
//		}
//		return "profile";
//	}
//	
//	
//	
//	@GetMapping("/submission")
//	public String submission() {
//		return "submission.html";
//	}
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//}
