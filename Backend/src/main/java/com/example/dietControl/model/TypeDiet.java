package com.example.dietControl.model;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Data
@Table(name = "tipo_dieta")
public class TypeDiet {

    @Id
    private int id;
    private String nome;

    @ManyToOne
    @JoinColumn(name = "id_users")
    private Users id_users;
}

