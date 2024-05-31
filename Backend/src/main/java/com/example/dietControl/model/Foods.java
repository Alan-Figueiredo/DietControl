package com.example.dietControl.model;
import jakarta.persistence.*;
import lombok.Data;



@Entity
@Data
@Table(name = "alimentos")
public class Foods {

    @Id
    private int id;
    private String nome,qnt_proteina,valor;

    @ManyToOne
    @JoinColumn(name = "id_users")
    private Users id_users;

}
