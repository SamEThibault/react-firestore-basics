package com.sam.springfirebase;

import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

// used to call methods based on server path and parameters
@RestController
public class PersonController
{
    // service field to call the methods
    public PersonService crudService;

    // constructor taking service object to set local object field
    public PersonController(PersonService crudService)
    {
        this.crudService = crudService;
    }

    // create new document from Person object parameter
    @PostMapping("/create")
    public String createPerson(@RequestBody Person person) throws InterruptedException, ExecutionException
    {
        return crudService.createPerson(person);
    }

    // get document by document_id parameter
    @GetMapping("/get")
    public Person getPerson(@RequestParam String document_id) throws InterruptedException, ExecutionException
    {
        return crudService.getPerson(document_id);
    }

    // update existing Person object by passing Person object
    @PutMapping("/update")
    public String updatePerson(@RequestBody Person person) throws InterruptedException, ExecutionException
    {
        return crudService.updatePerson(person);
    }

    // deletes a document by its document_id parameter
    @DeleteMapping("/delete")
    public String deletePerson(@RequestParam String document_id) throws InterruptedException, ExecutionException
    {
        return crudService.deletePerson(document_id);
    }
}
