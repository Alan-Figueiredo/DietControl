package com.example.dietControl.controller;
import com.example.dietControl.model.Foods;
import com.example.dietControl.model.Users;
import com.example.dietControl.repository.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
public class UsersController {

    private final UsersRepository usersRepository;

    @GetMapping
    public List<Users> list (){
        return usersRepository.findAll();
    }

    @PostMapping
    public Users create (@RequestBody Users users){
        return usersRepository.save(users);
    }

}
