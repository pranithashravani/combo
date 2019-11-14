package com.combo.org.service;

import com.combo.org.domain.Details;
import com.combo.org.repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DetailsServiceImplementation implements DetailsService {

    @Autowired
    DetailsRepository detailsRepository;

    public DetailsServiceImplementation(DetailsRepository detailsRepository) {
        this.detailsRepository = detailsRepository;
    }

    @Override
    public Details createTodo(Details details)  {
        return detailsRepository.save(details);
    }

    @Override
    public List<Details> getAllTodos()  {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
        return detailsRepository.findAll(sortByCreatedAtDesc);
    }

   @Override
    public ResponseEntity<Details> getTodoById(int id)  {
        return detailsRepository.findById(id)
            .map(todo -> ResponseEntity.ok().body(todo))
            .orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<Details> updateTodo(int id, Details details) {
        return detailsRepository.findById(id)
            .map(detailsData -> {
                detailsData.setEmailId(details.getEmailId());
                detailsData.setAddress(details.getAddress());
                Details updatedTodo = detailsRepository.save(detailsData);
                return ResponseEntity.ok().body(updatedTodo);
            }).orElse(ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<?> deleteTodo(int id) {
        return detailsRepository.findById(id)
            .map(todo -> {
                detailsRepository.deleteById(id);
                return ResponseEntity.ok().build();
            }).orElse(ResponseEntity.notFound().build());
    }

}
