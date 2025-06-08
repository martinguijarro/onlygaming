package com.onlygaming.Post;

import java.time.LocalDateTime;
import java.util.List;

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
public class Post {
    
    @Id
    private String postId;

    @NotNull
    @Field(name = "text")
    private String text;

    @NotNull
    @Field(name = "date")
    private LocalDateTime date = LocalDateTime.now();

    @Field(name = "likes")
    private List<String> likes;

    @NotNull
    @Field(name = "user_id")
    private String userId;

    @NotNull
    @Field(name = "game_id")
    private String gameId;

}
