package com.onlygaming.User;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
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
public class User {
    
    @Id
    private String userId;

    @NotNull
    @Field(name = "name")
    private String name;

    @NotNull
    @Indexed(unique = true)
    @Field(name = "username")
    private String username;

    @NotNull
    @Field(name = "password")
    private String password;

    @NotNull
    @Indexed(unique = true)
    @Field(name = "email")
    private String email;

    @NotNull
    @Indexed(unique = true)
    @Field(name = "tel")
    private String tel;

    @NotNull
    @Field(name = "role")
    private Role role;

    @Field(name = "user_games")
    private List<UserGame> userGames;

}
