package com.example.dietControl.controller;
import com.example.dietControl.model.Foods;
import com.example.dietControl.repository.FoodsRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/api/foods")
public class FoodsController {

    private final FoodsRepository foodsRepository;

    @GetMapping
    public List<Foods> findAll(){
        return foodsRepository.findAll();
    }


    @GetMapping("/{id_users}")
    public ResponseEntity<List<Foods>> findByUserId (@PathVariable int id_users){
        List<Foods> result = foodsRepository.findByUserId(id_users);
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(result);
        }
    }

    @PostMapping
    public Foods create (@RequestBody Foods food){
        return foodsRepository.save(food);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Foods> update (@PathVariable int id,@RequestBody Foods food){
        return foodsRepository.findById(id)
                .map(result -> {
                    result.setNome(food.getNome());
                    result.setQnt_proteina(food.getQnt_proteina());
                    result.setValor(food.getValor());
                    Foods updated = foodsRepository.save(result);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        return foodsRepository.findById(id)
                .map(result -> {
                    foodsRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }


}
