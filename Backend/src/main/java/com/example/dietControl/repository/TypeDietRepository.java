package com.example.dietControl.repository;


import com.example.dietControl.model.TypeDiet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface TypeDietRepository extends JpaRepository<TypeDiet, Integer> {
    @Query("SELECT t FROM TypeDiet t WHERE t.id_users.id = :id_users")
    List<TypeDiet> findByUserId(@Param("id_users") int id_users);

}




