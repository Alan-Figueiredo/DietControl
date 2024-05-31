package com.example.dietControl.repository;


import com.example.dietControl.model.ConsumptionFoods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsumptionFoodsRepository extends JpaRepository<ConsumptionFoods,Integer> {
}
