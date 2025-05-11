package com.onlygaming.Post;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.persistence.Id;
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
public class Post {
    
    @Id
    private String postId;

    @NotNull
    @Field(name = "text")
    private String text;

    @NotNull
    @Field(name = "game_id")
    private String gameId;

    @NotNull
    @Field(name = "user_id")
    private String userId;

}
