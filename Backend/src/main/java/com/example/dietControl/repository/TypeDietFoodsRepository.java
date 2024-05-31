package com.example.dietControl.repository;

import com.example.dietControl.model.TypeDietFoods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeDietFoodsRepository extends JpaRepository <TypeDietFoods,Integer> {
}
