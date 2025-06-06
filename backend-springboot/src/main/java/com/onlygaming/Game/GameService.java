package com.onlygaming.Game;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.onlygaming.Exception.ResourceNotFoundException;

@Service
public class GameService {

	private final GameRepository gameRepository;

	public GameService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}
	
	// CRUD methods
	
	public List<Game> getAllGames() {
		return gameRepository.findAll();
	}
	
	public ResponseEntity<Game> getGameById(String gameId) throws ResourceNotFoundException {
		Game game = gameRepository.findById(gameId)
			.orElseThrow(() -> new ResourceNotFoundException("Game with id " + gameId + " not found"));
		
		return ResponseEntity.ok().body(game);
	}
	
	public Game createGame(Game game) {
		return gameRepository.save(game);
	}
	
	public ResponseEntity<Game> updateGame(String gameId, Game gameDetails) throws ResourceNotFoundException {
		Game game = gameRepository.findById(gameId)
			.orElseThrow(() -> new ResourceNotFoundException("Game with id " + gameId + " not found"));
		
		game.setName(gameDetails.getName());
		game.setDescription(gameDetails.getDescription());
		game.setReleaseDate(gameDetails.getReleaseDate());
		game.setDeveloper(gameDetails.getDeveloper());
		game.setImageUrl(gameDetails.getImageUrl());
		
		final Game updatedGame = gameRepository.save(game);
		return ResponseEntity.ok(updatedGame);
	}
	
	public Map<String, Boolean> deleteUser(String gameId) throws ResourceNotFoundException {
		Game game = gameRepository.findById(gameId)
			.orElseThrow(() -> new ResourceNotFoundException("Game with id " + gameId + " not found"));
		gameRepository.delete(game);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Game deleted", Boolean.TRUE);
		return response;
	}
	
	// Custom methods

	public List<Game> getPopularGames() {
		List<Game> allGames = gameRepository.findAll();
		Collections.shuffle(allGames);
		return allGames.stream().limit(5).collect(Collectors.toList());
	}
	
}

