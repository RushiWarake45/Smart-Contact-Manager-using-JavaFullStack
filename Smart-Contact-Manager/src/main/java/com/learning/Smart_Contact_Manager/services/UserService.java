package com.learning.Smart_Contact_Manager.services;

import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.repositories.ContactRepo;
import com.learning.Smart_Contact_Manager.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public List<User> getAllUsers(){
        return this.userRepo.findAll();
    }

    public User saveUser(User u){
        return this.userRepo.save(u);
    }
}
