package main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import main.entity.CodeRequest;
import main.entity.CodeResponse;
import main.services.CompilerService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/compile")
public class CompilerController {

    @Autowired
    private CompilerService compilerService;

    @PostMapping("/cpp")
    public ResponseEntity<CodeResponse> compileCode(@RequestBody CodeRequest request) {
        try {
            String output = compilerService.executeCode(request.getCode(), request.getLanguage(), request.getInput());
            return ResponseEntity.ok(new CodeResponse(output));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new CodeResponse("Error: " + e.getMessage()));
        }
    }
}
