package com.onlygaming.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.onlygaming.Exception.ResourceNotFoundException;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    // CRUD methods

    public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	public ResponseEntity<User> getUserById(String userId) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new ResourceNotFoundException("User with id " + userId + " not found"));
		
		return ResponseEntity.ok().body(user);
	}
	
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	public ResponseEntity<User> updateUser(String userId, User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new ResourceNotFoundException("User with id " + userId + " not found"));
		
		user.setName(userDetails.getName());
		user.setUsername(userDetails.getUsername());
		
		final User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	public Map<String, Boolean> deleteUser(String userId) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new ResourceNotFoundException("User with id " + userId + " not found"));
		userRepository.delete(user);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("User deleted", Boolean.TRUE);
		return response;
	}

    // Other methods

}
