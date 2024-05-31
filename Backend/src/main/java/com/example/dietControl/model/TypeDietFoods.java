package com.example.dietControl.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tipo_dieta_alimentos")
@IdClass(TypeDietFoodsAux.class)
public class TypeDietFoods {

    @Id
    @ManyToOne
    @JoinColumn(name = "id_tipo_dieta")
    private TypeDiet id_tipo_dieta;


    @Id
    @ManyToOne
    @JoinColumn(name = "id_alimentos")
    private Foods id_alimentos;

}
