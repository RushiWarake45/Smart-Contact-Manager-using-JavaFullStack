package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.dtos.UserDto;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.services.UserService;
import jakarta.validation.Valid;
//import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.security.core.Authentication;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.userService.getAllUsers();
    }

    @PostMapping("/users")
    public User saveUser(@Valid @RequestBody UserDto userdto){
        return this.userService.saveUser(userdto);
    }

    @GetMapping("/users/me")
    public User getCurrUser(Authentication authentication){

        String email;
        email = authentication.getName();
        return userService.getUserByEmail(email);
    }


}
