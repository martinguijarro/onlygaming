package com.onlygaming.Reply;

import java.time.LocalDateTime;

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
public class Reply {
    
    @Id
    private String replyId;

    @NotNull
    @Field(name = "text")
    private String text;

    @NotNull
    @Field(name = "date")
    private LocalDateTime date;

    @NotNull
    @Field(name = "user_id")
    private String userId;

    @NotNull
    @Field(name = "post_id")
    private String postId;

}
