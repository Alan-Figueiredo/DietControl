package com.example.dietControl.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;



@Entity
@Data
@Table(name = "alimentos")
public class Foods {

    @Id
    private int id;

    private String nome,qnt_proteina,valor;

}
