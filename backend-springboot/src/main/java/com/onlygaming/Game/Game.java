package com.onlygaming.Game;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.onlygaming.UserGame.UserGame;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Game {

	@Id
	private String gameId;

	@NotNull
	@Field(name = "name")
	private String name;

	@Field(name = "description")
	private String description;

	@Field(name = "release_date")
	private String releaseDate;

	@Field(name = "developer")
	private String developer;

	@Field(name = "image_url")
	private String imageUrl;

	@Field(name = "user_games")
	private List<UserGame> userGames;
}
