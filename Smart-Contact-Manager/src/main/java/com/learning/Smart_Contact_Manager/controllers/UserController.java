package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.dtos.UserDto;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

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

}
