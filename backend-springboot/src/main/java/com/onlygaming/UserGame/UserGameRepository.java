package com.onlygaming.UserGame;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface UserGameRepository extends MongoRepository<UserGame, String> {
    List<UserGame> findByUserId(String userId);
}
