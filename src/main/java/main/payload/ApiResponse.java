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
public class ApiResponse {

	private Boolean success;
    private String message;
	public Boolean getSuccess() {
		return success;
	}
	public void setSuccess(Boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public ApiResponse(Boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	public ApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
    

}
