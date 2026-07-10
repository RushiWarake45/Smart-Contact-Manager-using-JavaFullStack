package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.userService.getAllUsers();
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user){
        return this.userService.saveUser(user);
    }

}
