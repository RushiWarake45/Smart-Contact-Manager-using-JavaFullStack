package com.learning.Smart_Contact_Manager.repositories;

import com.learning.Smart_Contact_Manager.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {
 Optional<User> findByEmail(String email);
}
