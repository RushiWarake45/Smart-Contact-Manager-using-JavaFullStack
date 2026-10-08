package com.learning.Smart_Contact_Manager.controllers;

import com.learning.Smart_Contact_Manager.entities.Contact;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.services.ContactService;
import com.learning.Smart_Contact_Manager.services.UserService;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactController {
    @Autowired
    private ContactService contactService;

    @Autowired
    private UserService userService;


//    @GetMapping("/contacts")
//    public List<Contact> getAllContacts(){
//
//        return this.contactService.getAllContacts();
//    }
    @PostMapping("/contacts")
    public Contact saveContact(@RequestBody Contact contact, Authentication authentication){

        String email = authentication.getName();
        return contactService.saveContact(contact, email);

    }

    @GetMapping("/contacts")
    public List<Contact> getUserContacts(Authentication authentication) {

        String email = authentication.getName();

        User user = userService.getUserByEmail(email);

        return contactService.getAllContacts(user);
    }

    @DeleteMapping("/contacts/{id}")
    public String deleteContact(@PathVariable int id, Authentication authentication) {
        String email = authentication.getName();
        User user = userService.getUserByEmail(email);
        contactService.deleteContact(id, user);
        return "Contact deleted successfully";
    }

    @PutMapping("/contacts/{id}/favorite")
    public Contact toggleFavorite(@PathVariable int id,Authentication authentication){
        String email=authentication.getName();
        User user=userService.getUserByEmail(email);
        return contactService.toggleFavourite(id,user);

    }
    @PutMapping("/contacts/{id}")
    public Contact editContact(@RequestBody Contact updatedContact,@PathVariable int id,Authentication authentication){
        String email=authentication.getName();
        User user=userService.getUserByEmail(email);
        return contactService.editContact(id,user,updatedContact);
    }

}
