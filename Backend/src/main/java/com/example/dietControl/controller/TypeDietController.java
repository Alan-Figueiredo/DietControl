package com.example.dietControl.controller;
import com.example.dietControl.model.TypeDiet;
import com.example.dietControl.repository.TypeDietRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/api/foods/type-diet")
public class TypeDietController {

    private final TypeDietRepository typeDietRepository;

    @GetMapping
    public List<TypeDiet> findAll(){
        return typeDietRepository.findAll();
    }

    @PostMapping
    public TypeDiet create(@RequestBody TypeDiet typeDiet){
        return typeDietRepository.save(typeDiet);
    }
}
