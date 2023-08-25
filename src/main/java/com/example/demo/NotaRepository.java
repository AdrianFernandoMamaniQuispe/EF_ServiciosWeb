package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "notas", path = "notas")
public interface NotaRepository extends CrudRepository<Nota, Long> {
    
}
