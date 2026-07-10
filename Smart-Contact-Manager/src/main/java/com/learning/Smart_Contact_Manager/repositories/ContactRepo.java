package com.learning.Smart_Contact_Manager.repositories;

import com.learning.Smart_Contact_Manager.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<Contact,Integer> {

}
