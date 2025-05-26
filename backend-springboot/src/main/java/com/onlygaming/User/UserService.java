package com.onlygaming.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.onlygaming.Exception.ResourceNotFoundException;
import com.onlygaming.Game.Game;
import com.onlygaming.Game.GameRepository;
import com.onlygaming.UserGame.UserGame;
import com.onlygaming.UserGame.UserGameRepository;

@Service
public class UserService {
    
	private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
	private final UserGameRepository userGameRepository;
	private final GameRepository gameRepository;

	public UserService(UserRepository userRepository, UserGameRepository userGameRepository, GameRepository gameRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.userGameRepository = userGameRepository;
		this.gameRepository = gameRepository;
		this.passwordEncoder = passwordEncoder;
	}

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
		// Hash password before saving
		String hashedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(hashedPassword);
		return userRepository.save(user);
	}
	
	public ResponseEntity<User> updateUser(String userId, User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new ResourceNotFoundException("User with id " + userId + " not found"));
		
		user.setName(userDetails.getName());
		user.setUsername(userDetails.getUsername());
		user.setPassword(userDetails.getPassword());
		user.setEmail(userDetails.getEmail());
		
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

	public LoginResponse authenticateUser(String username, String loginPass) {
		Optional<User> userOpt = userRepository.findByUsername(username);

		if (userOpt.isEmpty()) {
			System.out.println("User with username " + username + " not found");
			return new LoginResponse(false, null);
		}

		User user = userOpt.get();

		boolean matchingPasswords = passwordEncoder.matches(loginPass, user.getPassword());
		
		if (matchingPasswords) {
			user.setPassword(null); // Clean password before return object
			return new LoginResponse(true, user);
		} else {
			return new LoginResponse(false, null);
		}
	}

	public List<Game> getGamesByUserId(String userId) throws ResourceNotFoundException {
		List<UserGame> userGames = userGameRepository.findByUserId(userId);
		
		List<Game> games = new ArrayList<>();

		for (UserGame userGame : userGames) {
			Optional<Game> game = gameRepository.findById(userGame.getGameId());

			game.ifPresent(games::add);
		}


		System.out.println(games);
		return games;
	}

}
