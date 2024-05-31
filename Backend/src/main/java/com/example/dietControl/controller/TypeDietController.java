package com.example.dietControl.controller;

import com.example.dietControl.model.Foods;
import com.example.dietControl.model.TypeDiet;
import com.example.dietControl.model.Users;
import com.example.dietControl.repository.TypeDietRepository;
import com.example.dietControl.repository.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@AllArgsConstructor
@RequestMapping("/api/foods/type-diet")
public class TypeDietController {

    private final TypeDietRepository typeDietRepository;


    @GetMapping
    public List<TypeDiet> findAll(){
        return typeDietRepository.findAll();
    }

    @GetMapping("/{id_users}")
    public ResponseEntity<List<TypeDiet>> findByUserId (@PathVariable int id_users){
        List<TypeDiet> result = typeDietRepository.findByUserId(id_users);
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(result);
        }
    }
    @PostMapping
    public TypeDiet create (@RequestBody TypeDiet typeDiet){
        return typeDietRepository.save(typeDiet);
    }

}
