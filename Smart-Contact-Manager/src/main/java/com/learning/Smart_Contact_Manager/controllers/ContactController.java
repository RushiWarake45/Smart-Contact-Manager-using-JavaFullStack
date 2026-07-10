package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.entities.Contact;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.services.ContactService;
import com.learning.Smart_Contact_Manager.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ContactController {
    @Autowired
    private ContactService contactService;


    @GetMapping("/contacts")
    public List<Contact> getAllContacts(){
        return this.contactService.getAllContacts();
    }
    @PostMapping("/contacts")
    public void saveContact(@RequestBody Contact contact){
        this.contactService.saveContact(contact);
    }

}
