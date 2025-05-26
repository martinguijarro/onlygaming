package com.onlygaming.UserGame;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserGameRepository extends MongoRepository<UserGame, String> {
    
}
