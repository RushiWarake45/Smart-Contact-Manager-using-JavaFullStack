package com.learning.Smart_Contact_Manager.services;

import com.learning.Smart_Contact_Manager.entities.Contact;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.repositories.ContactRepo;
import com.learning.Smart_Contact_Manager.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ContactService {
    @Autowired
    private ContactRepo contactRepo;

    @Autowired
    private UserRepo userRepo;

    public List<Contact> getAllContacts(){
        return this.contactRepo.findAll();
    }

    public Contact saveContact(Contact c,String email){

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        c.setUser(user);

        return contactRepo.save(c);


    }
}
