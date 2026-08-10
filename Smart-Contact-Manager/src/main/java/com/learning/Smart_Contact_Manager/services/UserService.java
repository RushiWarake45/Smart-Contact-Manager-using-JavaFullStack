package com.learning.Smart_Contact_Manager.services;

import com.learning.Smart_Contact_Manager.dtos.UserDto;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.repositories.ContactRepo;
import com.learning.Smart_Contact_Manager.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public List<User> getAllUsers(){
        return this.userRepo.findAll();
    }

    public User saveUser(UserDto uDto){

        User existing=userRepo.findByEmail(uDto.getEmail()).orElse(null);

        if(existing!=null){
            throw new RuntimeException("Email Already Exist...");
        }

        User user=new User();
        user.setName(uDto.getName());
        user.setEmail(uDto.getEmail());
        user.setPassword(passwordEncoder.encode(uDto.getPassword()));
        return this.userRepo.save(user);
    }

    public User getUserByEmail(String email){
        return userRepo.findByEmail(email).orElse(null);


    }
}
