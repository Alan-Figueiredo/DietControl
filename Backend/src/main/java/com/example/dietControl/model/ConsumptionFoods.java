package com.example.dietControl.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.util.Date;



@Entity
@Data
@Table(name = "consumo_alimentos")
public class ConsumptionFoods {

    @Id
    int id_consumo;
    int qnt_consumida;
    Date hora_consumida;
    int id_user;
    int id_alimentos;

}
