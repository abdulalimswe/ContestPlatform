package main.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "submissions")
@NoArgsConstructor
@Data
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "problem_name", nullable = false)
    private String problemName;

    @Column(name = "code", columnDefinition = "TEXT", nullable = false)
    private String code;

    @Column(name = "language", nullable = false)
    private String language;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "verdict", nullable = false)
    private String verdict;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "result", columnDefinition = "TEXT")
    private String result; // Serialized JSON string for storage

    public Submission(String problemName, String code, String language,
                      String userId, String verdict, ArrayList<?> result) {
        this.problemName = problemName;
        this.code = code;
        this.language = language;
        this.userId = userId;
        this.verdict = verdict;

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        this.date = formatter.format(date);

        // Convert the result list to a JSON string
        this.result = serializeResult(result);
    }

    private String serializeResult(ArrayList<?> result) {
        try {
            // Use a library like Jackson or Gson for serialization
            return new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(result);
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize result", e);
        }
    }

	public void setDate(String format) {
		this.date = format;
		
	}

	
}
