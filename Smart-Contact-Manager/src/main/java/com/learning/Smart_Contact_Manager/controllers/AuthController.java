package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.dtos.JwtResponse;
import com.learning.Smart_Contact_Manager.dtos.LoginDto;
import com.learning.Smart_Contact_Manager.jwt.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LoginDto dto) {

        authenticationManager.authenticate(

                new UsernamePasswordAuthenticationToken(

                        dto.getEmail(),

                        dto.getPassword()

                )

        );

        String token = jwtService.generateToken(dto.getEmail());
        return new JwtResponse(token);

    }
}
