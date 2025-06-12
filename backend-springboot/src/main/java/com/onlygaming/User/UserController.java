package com.onlygaming.User;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlygaming.Exception.ResourceNotFoundException;
import com.onlygaming.Game.Game;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    
    @Autowired
	private UserService userService;
	
	// CRUD endpoints
	
	@GetMapping("/users/all")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable String userId) throws ResourceNotFoundException {
		return userService.getUserById(userId);
	}

	@GetMapping("/user/username/{userId}")
	public ResponseEntity<User> getUserByUsername(@PathVariable String username) throws ResourceNotFoundException {
		return userService.getUserById(username);
	}
	
	@PostMapping("/user/create")
	public User createUser(@Valid @RequestBody User user) {
		return userService.createUser(user);
	}
	
	@PutMapping("/user/{userId}/edit")
	public ResponseEntity<User> updateUser(@PathVariable String userId, @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
		return userService.updateUser(userId, userDetails);
	}
	
	@DeleteMapping("/user/{userId}/delete")
	public Map<String, Boolean> deleteUser(@PathVariable String userId) throws ResourceNotFoundException {
		return userService.deleteUser(userId);
	}
	
	// Custom endpoints

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
		LoginResponse response = userService.authenticateUser(request.getUsername(), request.getPassword());
		return ResponseEntity.ok(response);
	}

	@GetMapping("/user/{userId}/games")
	public List<Game> getGamesByUserId(@PathVariable String userId) throws ResourceNotFoundException {
		return userService.getGamesByUserId(userId);
	}

	@DeleteMapping("user/username/{username}/delete")
	public Map<String, Boolean> deleteUserByUsername(@PathVariable String username) throws ResourceNotFoundException {
		return userService.deleteUserByUsername(username);
	}

	@PutMapping("user/username/{username}/role")
	public Map<String, Boolean> updateUserRole(@PathVariable String username, @RequestBody String role) throws ResourceNotFoundException {		
		return userService.updateUserRole(username, role);
	}

}
