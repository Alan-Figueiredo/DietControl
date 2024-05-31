package com.example.dietControl.repository;
import com.example.dietControl.model.Foods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface FoodsRepository extends JpaRepository<Foods, Integer> {

    @Query("SELECT t FROM Foods t WHERE t.id_users.id = :id_users")
    List<Foods> findByUserId(@Param("id_users") int id_users);
}
