package com.combo.org.web.rest;

import com.combo.org.domain.Details;
import com.combo.org.repository.DetailsRepository;
import com.combo.org.service.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user")
public class DetailsController {
    @Autowired
    DetailsService detailsService;

    @GetMapping("/get")
    public List<Details> getAllTodos() {
       return detailsService.getAllTodos();
    }

    @PostMapping("/save/user")
    public Details createTodo(@Valid @RequestBody Details details) {
        return detailsService.createTodo(details);
    }

    @GetMapping(value="/user/{id}")
    public ResponseEntity<Details> getTodoById(@PathVariable("id") int id) {
       return detailsService.getTodoById(id);
    }

    @PutMapping(value="/user/{id}")
    public ResponseEntity<Details> updateTodo(@PathVariable("id") int id,
                                           @Valid @RequestBody Details details) {
        return detailsService.updateTodo(id, details);

    }

    @DeleteMapping(value="/user/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable("id") int id) {
        return detailsService.deleteTodo(id);

    }
}

