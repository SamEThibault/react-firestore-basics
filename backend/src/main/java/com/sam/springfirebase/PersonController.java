package com.sam.springfirebase;

import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
public class PersonController
{
    public PersonService crudService;

    // controller taking service object to set local object field
    public PersonController(PersonService crudService)
    {
        this.crudService = crudService;
    }

    // create new document from Person object
    @PostMapping("/create")
    public String createPerson(@RequestBody Person person) throws InterruptedException, ExecutionException
    {
        return crudService.createPerson(person);
    }

    // get document by id
    @GetMapping("/get")
    public Person getPerson(@RequestParam String document_id) throws InterruptedException, ExecutionException
    {
        return crudService.getPerson(document_id);
    }

    // update existing Person object by passing in modified person object
    @PutMapping("/update")
    public String updatePerson(@RequestBody Person person) throws InterruptedException, ExecutionException
    {
        return crudService.updatePerson(person);
    }

    // deletes a document by its id
    @DeleteMapping("/delete")
    public String deletePerson(@RequestParam String document_id) throws InterruptedException, ExecutionException
    {
        return crudService.deletePerson(document_id);
    }
}
