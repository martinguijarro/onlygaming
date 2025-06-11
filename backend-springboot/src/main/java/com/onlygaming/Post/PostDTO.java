package com.onlygaming.Post;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
    
    private String postId;
    private String text;
    private LocalDateTime date;
    private List<String> likes;
    private List<String> reports;
    private String userName;
    private String userUsername;
    private String game;

}
