package main.entity.user;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Data
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "contact")
    private String contact;

    @Column(name = "country")
    private String country;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "description")
    private String description;

    @Column(name = "date", nullable = false)
    private String date;

    @Transient
    private Map<String, ?> stats;

    public User(String firstName, String lastName, String username, String email,
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

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        this.date = formatter.format(date);
    }

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String encode) {
		this.password = encode;
		
	}

	public Object getDate() {
		return date;
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

	public void setId(Long id) {
		this.id = id;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public User(Long id, String firstName, String username, String lastName, String email, String contact,
			String country, String password, String description, String date, Map<String, ?> stats) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.username = username;
		this.lastName = lastName;
		this.email = email;
		this.contact = contact;
		this.country = country;
		this.password = password;
		this.description = description;
		this.date = date;
		this.stats = stats;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	

	

	
}
