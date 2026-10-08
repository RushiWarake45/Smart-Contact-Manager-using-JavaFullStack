package com.learning.Smart_Contact_Manager.services;

import com.learning.Smart_Contact_Manager.entities.Contact;
import com.learning.Smart_Contact_Manager.entities.User;
import com.learning.Smart_Contact_Manager.repositories.ContactRepo;
import com.learning.Smart_Contact_Manager.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.lang.*;

@Component
public class ContactService {
    @Autowired
    private ContactRepo contactRepo;

    @Autowired
    private UserRepo userRepo;


    public List<Contact> getAllContacts(User user){
        return this.contactRepo.findByUser(user);

    }

    public Contact saveContact(Contact c,String email){

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        c.setUser(user);

        return contactRepo.save(c);


    }
    public void deleteContact(int id, User user) {

        Contact contact = contactRepo.findByIdAndUser(id, user)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        contactRepo.delete(contact);
    }

    public Contact toggleFavourite(int id, User user){
        Contact contact=contactRepo.findByIdAndUser(id,user).orElseThrow(() ->
                new RuntimeException("Contact not found.."));

        contact.setFavourite(!contact.isFavourite());
        return contactRepo.save(contact);
    }
    public Contact editContact(int id,User user,Contact updatedContact){
        Contact existingContact=contactRepo.findByIdAndUser(id, user).orElseThrow(()->
         new RuntimeException("Contact not Exist..") );

        existingContact.setName(updatedContact.getName());
        existingContact.setEmail(updatedContact.getEmail());
        existingContact.setAddress(updatedContact.getAddress());
        existingContact.setCompany(updatedContact.getCompany());
        existingContact.setPhone(updatedContact.getPhone());
        existingContact.setTag(updatedContact.getTag());

     return contactRepo.save(existingContact);
    }
}
