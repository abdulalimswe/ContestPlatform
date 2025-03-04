package main.payload;

import java.util.Map;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Data
@Getter 
@Setter
public class SignUpRequest {
	
    private String firstName;
    
    private String lastName;
    
    private String username;
    
    private String email;
    
    private String contact;
    
    private String country;
    
    private String password;

    private String description;
    
    private Map<String, ?> stats;
    
	public SignUpRequest(String firstName, String lastName, String username, String email, 
			String contact, String country, 
			String password, String description, Map<String, ?> stats) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.contact = contact;
		this.country = country;
		this.password = password;
		this.description = description;
		this.stats = stats;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Map<String, ?> getStats() {
		return stats;
	}

	public void setStats(Map<String, ?> stats) {
		this.stats = stats;
	}


	public SignUpRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
