package main.entity.user;


import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "problems")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "problem_tags", joinColumns = @JoinColumn(name = "problem_id"))
    @Column(name = "tag")
    private List<String> tags = new ArrayList<>();

    @Column(name = "count_ac", nullable = false)
    private int countAC;

    @Column(name = "count_total", nullable = false)
    private int countTotal;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "statement", columnDefinition = "TEXT", nullable = false)
    private String statement;

    @Column(name = "explanation", columnDefinition = "TEXT")
    private String explanation;

    @Column(name = "sample_testcases", columnDefinition = "TEXT")
    private String sampleTestcases; // JSON string

    @Column(name = "system_testcases", columnDefinition = "TEXT")
    private String systemTestcases; // JSON string

    @Column(name = "time_limit", nullable = false)
    private double time;

    @Column(name = "memory_limit", nullable = false)
    private int memory;

    public void setSampleTestcases(ArrayList<?> testcases) {
        this.sampleTestcases = serializeToJson(testcases);
    }

    public void setSystemTestcases(ArrayList<?> testcases) {
        this.systemTestcases = serializeToJson(testcases);
    }

    private String serializeToJson(ArrayList<?> data) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(data);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error serializing data to JSON", e);
        }
    }

    public ArrayList<?> getSampleTestcases() {
        return deserializeFromJson(this.sampleTestcases);
    }

    public ArrayList<?> getSystemTestcases() {
        return deserializeFromJson(this.systemTestcases);
    }

    private ArrayList<?> deserializeFromJson(String json) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(json, ArrayList.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error deserializing JSON to data", e);
        }
    }
}
