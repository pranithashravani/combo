package com.combo.org.service;

import com.combo.org.domain.Details;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.jws.soap.SOAPBinding;
import java.util.List;


public interface DetailsService {
    public Details createTodo(Details details);
    public List<Details> getAllTodos() ;
public ResponseEntity<Details> getTodoById(int id);
    public ResponseEntity<Details> updateTodo(int id, Details details) ;
    public ResponseEntity<?> deleteTodo(@PathVariable("id") int id);
}
