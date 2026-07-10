package com.learning.Smart_Contact_Manager.services;

import com.learning.Smart_Contact_Manager.entities.Contact;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.repositories.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ContactService {
    @Autowired
    private ContactRepo contactRepo;

    public List<Contact> getAllContacts(){
        return this.contactRepo.findAll();
    }

    public void saveContact(Contact c){
        this.contactRepo.save(c);
    }
}
