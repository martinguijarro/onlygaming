package com.onlygaming.UserGame;

import org.springframework.stereotype.Service;

@Service
public class UserGameService {
    
    private final UserGameRepository userGameRepository;

    public UserGameService(UserGameRepository userGameRepository) {
        this.userGameRepository = userGameRepository;
    }

    // CRUD methods

    public UserGame createUserGame(UserGame userGame) {
        return userGameRepository.save(userGame);
    }

    // Other methods

}
