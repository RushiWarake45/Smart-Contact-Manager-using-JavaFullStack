package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.dtos.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public String login(@RequestBody LoginDto dto) {

        authenticationManager.authenticate(

                new UsernamePasswordAuthenticationToken(

                        dto.getEmail(),

                        dto.getPassword()

                )

        );

        return "Login Successful";

    }
}
