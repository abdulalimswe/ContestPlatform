package main.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter 
@Setter
public class UserProfile {
	
    private Long id;
    private String username;
    private String email;
    private Object date;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public Object getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public UserProfile(Long long1, String username, String email, Object object) {
		super();
		this.id = long1;
		this.username = username;
		this.email = email;
		this.date = object;
	}
	public UserProfile() {
		super();
		// TODO Auto-generated constructor stub
	}
	
    
    
	
}