package com.onlygaming.Reply;

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
public class Reply {
    
    @Id
    private String replyId;

    @NotNull
    @Field(name = "text")
    private String text;

    @NotNull
    @Field(name = "user_id")
    private String userId;

}
