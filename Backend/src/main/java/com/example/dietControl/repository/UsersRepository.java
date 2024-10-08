package com.example.dietControl.repository;
import com.example.dietControl.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    Users findByLogin(String login);
}
