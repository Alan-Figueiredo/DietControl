package com.example.dietControl.repository;
import com.example.dietControl.model.Foods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FoodsRepository extends JpaRepository<Foods, Integer> {
}
