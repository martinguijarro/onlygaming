package com.onlygaming.Game;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlygaming.Exception.ResourceNotFoundException;

import jakarta.validation.Valid;

@RestController
public class GameController {

	@Autowired
	private GameService gameService;
	
	// CRUD endpoints
	
	@GetMapping("/games/all")
	public List<Game> getAllGames() {
		return gameService.getAllGames();
	}
	
	@GetMapping("/game/{gameId}")
	public ResponseEntity<Game> getGameById(@PathVariable String gameId) throws ResourceNotFoundException {
		return gameService.getGameById(gameId);
	}
	
	@PostMapping("/game/create")
	public Game createGame(@Valid @RequestBody Game game) {
		return gameService.createGame(game);
	}
	
	@PutMapping("/game/{gameId}/edit")
	public ResponseEntity<Game> updateGame(@PathVariable String gameId, @Valid @RequestBody Game gameDetails) throws ResourceNotFoundException {
		return gameService.updateGame(gameId, gameDetails);
	}
	
	@DeleteMapping("/game/{gameId}/delete")
	public Map<String, Boolean> deleteGame(@PathVariable String gameId) throws ResourceNotFoundException {
		return gameService.deleteUser(gameId);
	}
	
	// Custom endpoints
	
}
