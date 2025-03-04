package main.services;

import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.util.concurrent.TimeUnit;

@Service
public class CompilerService {

    public String executeCode(String code, String language, String input) throws IOException, InterruptedException {
     
        File codeFile = saveCodeToFile(code, language);

        switch (language.toLowerCase()) {
            case "cpp":
                return executeCppCode(codeFile, input);
            case "java":
                return executeJavaCode(codeFile, input);
            case "python":
                return executePythonCode(codeFile, input);
            default:
                throw new IllegalArgumentException("Unsupported language: " + language);
        }
    }

    private File saveCodeToFile(String code, String language) throws IOException {
        String extension = switch (language.toLowerCase()) {
            case "cpp" -> ".cpp";
            case "java" -> ".java";
            case "python" -> ".py";
            default -> throw new IllegalArgumentException("Unsupported language: " + language);
        };

        File codeFile = File.createTempFile("program", extension);
        Files.writeString(codeFile.toPath(), code);
        return codeFile;
    }

    private String executeCppCode(File cppFile, String input) throws IOException, InterruptedException {
    	
        String executablePath = cppFile.getAbsolutePath().replace(".cpp", "");
        ProcessBuilder compileBuilder = new ProcessBuilder("g++", cppFile.getAbsolutePath(), "-o", executablePath);
        compileBuilder.redirectErrorStream(true);

        Process compileProcess = compileBuilder.start();
        @SuppressWarnings("resource")
		String compileErrors = new BufferedReader(new InputStreamReader(compileProcess.getInputStream()))
                .lines().collect(java.util.stream.Collectors.joining("\n"));

        if (compileProcess.waitFor() != 0) {
            throw new RuntimeException("Compilation failed:\n" + compileErrors);
        }

        return executeProgram(new ProcessBuilder(executablePath), input);
    }

    private String executeJavaCode(File javaFile, String input) throws IOException, InterruptedException {
       
        ProcessBuilder compileBuilder = new ProcessBuilder("javac", javaFile.getAbsolutePath());
        compileBuilder.redirectErrorStream(true);

        Process compileProcess = compileBuilder.start();
        @SuppressWarnings("resource")
		String compileErrors = new BufferedReader(new InputStreamReader(compileProcess.getInputStream()))
                .lines().collect(java.util.stream.Collectors.joining("\n"));

        if (compileProcess.waitFor() != 0) {
            throw new RuntimeException("Compilation failed:\n" + compileErrors);
        }

        String className = javaFile.getName().replace(".java", "");
        return executeProgram(new ProcessBuilder("java", "-cp", javaFile.getParent(), className), input);
    }

    private String executePythonCode(File pythonFile, String input) throws IOException, InterruptedException {

        return executeProgram(new ProcessBuilder("python3", pythonFile.getAbsolutePath()), input);
    }

    private String executeProgram(ProcessBuilder builder, String input) throws IOException, InterruptedException {
        builder.redirectErrorStream(true);

        if (input != null && !input.isEmpty()) {
            builder.redirectInput(ProcessBuilder.Redirect.PIPE);
        }

        Process process = builder.start();

        if (input != null && !input.isEmpty()) {
            try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()))) {
                writer.write(input);
                writer.flush();
            }
        }

        @SuppressWarnings("resource")
		String output = new BufferedReader(new InputStreamReader(process.getInputStream()))
                .lines().collect(java.util.stream.Collectors.joining("\n"));

        if (!process.waitFor(5, TimeUnit.SECONDS)) {
            process.destroy();
            throw new RuntimeException("Execution timed out.");
        }

        return output;
    }
}
