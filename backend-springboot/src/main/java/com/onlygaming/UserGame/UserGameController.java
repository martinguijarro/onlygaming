package com.onlygaming.UserGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserGameController {
    
    @Autowired
    private UserGameService userGameService;

    // CRUD endpoints

    @PostMapping("/usergame/create")
    public UserGame createUserGame(@RequestBody UserGame userGame) {   
        return userGameService.createUserGame(userGame);
    }
    

}
