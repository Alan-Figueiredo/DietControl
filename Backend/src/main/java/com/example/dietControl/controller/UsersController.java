package com.example.dietControl.controller;
import com.example.dietControl.model.Users;
import com.example.dietControl.repository.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
public class UsersController {

    private final UsersRepository usersRepository;




    @GetMapping
    public List<Users> list (){
        return usersRepository.findAll();
    }

    @PostMapping
    public Users create (@RequestBody Users users){
        return usersRepository.save(users);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users users) {
        Users foundUser = usersRepository.findByLogin(users.getLogin());
        if (foundUser != null) {
            if (foundUser.getSenha().equals(users.getSenha())) {
                return new ResponseEntity<>(foundUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ErrorResponse("Senha incorreta"), HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<>(new ErrorResponse("Usuário não encontrado"), HttpStatus.UNAUTHORIZED);
        }
    }


}
