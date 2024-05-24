package com.example.dietControl.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table(name = "tipo_dieta")
public class TypeDiet {

    @Id
    private int id;
    private String nome;
}
