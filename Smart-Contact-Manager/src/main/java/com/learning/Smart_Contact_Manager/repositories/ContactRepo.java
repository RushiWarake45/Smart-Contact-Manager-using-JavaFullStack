package com.learning.Smart_Contact_Manager.repositories;

import com.learning.Smart_Contact_Manager.entities.Contact;
import com.learning.Smart_Contact_Manager.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ContactRepo extends JpaRepository<Contact,Integer> {
    List<Contact> findByUser(User user);
    Optional<Contact> findByIdAndUser(int id, User user);
}
