package com.onlygaming.UserGame;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

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
public class UserGame {
    
    @Id
    private String userGameId;

    @NotNull
    @Field(name = "user_id")
    private String userId;

    @NotNull
    @Field(name = "game_id")
    private String gameId;

    @NotNull
    @Field(name = "status")
    private GameStatus status;
    
}
