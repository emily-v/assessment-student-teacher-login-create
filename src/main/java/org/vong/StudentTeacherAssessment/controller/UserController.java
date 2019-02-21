package org.vong.StudentTeacherAssessment.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vong.StudentTeacherAssessment.services.UserService;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.vong.StudentTeacherAssessment.models.User;

@RestController // don't need @ResponseBody
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("assmt/users")

public class UserController {
	
	private UserService userService;
	
	public UserController() {}
	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	// GET USER BY EMAIL
		@GetMapping(path="/user", produces=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<User> requestUserByEmail(@RequestParam(name="email") String email) {
			User u = userService.getByEmail(email);
			if (u != null) {
				return new ResponseEntity<> (u, HttpStatus.OK);
			}
			return new ResponseEntity<>((User) null, HttpStatus.NOT_FOUND);
		}
		
	// AUTHENTICATE USER
		@PostMapping(
				path="/auth",
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<User> requestToAuthenticateUser(@RequestBody String data) throws JsonParseException, JsonMappingException, IOException {
			
			ObjectMapper om = new ObjectMapper();
			User temp = om.readValue(data, User.class);
			String email = temp.getEmail();
			String password = temp.getPassword();

			User u = userService.authUser(temp.getEmail(), temp.getPassword());

			System.out.println(u);
			if(u.getUserId() > 0) {
				HttpHeaders headers = new HttpHeaders();
				headers.set("Location", "http://localhost:8080/users/user?id=" + u.getUserId());
				return new ResponseEntity<>(u, headers, HttpStatus.CREATED);
			}
			return new ResponseEntity<>((User)null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		// CREATE NEW USER
		@PostMapping(
				path="/user",
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<User> requestToCreateAUser(@RequestBody User newUser) {
			userService.createUser(newUser);
			if(newUser.getUserId() > 0) {
				HttpHeaders headers = new HttpHeaders();
				headers.set("Location", "http://localhost:8080/users/user?id=" + newUser.getUserId());
				return new ResponseEntity<>(newUser, headers, HttpStatus.CREATED);
			}
			return new ResponseEntity<>((User)null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

}
