package com.sam.springfirebase;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

//  service to manipulate People Firestore collection
@Service
public class PersonService
{
    // first connect to our database by creating a firestore object
    Firestore dbFirestore = FirestoreClient.getFirestore();

    // create a new person document from a person object
    public String createPerson(Person person) throws ExecutionException, InterruptedException
    {
        // connect to the people collection, set a new document using Person parameter
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("people").document(
                person.getDocument_id()).set(person);

        // return creation time if successful
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    // get a document by its ID and return it as a Person object
    public Person getPerson(String document_id) throws ExecutionException, InterruptedException
    {
        // try and retrieve the document by the id parameter
        DocumentReference documentReference = dbFirestore.collection("people").document(document_id);

        // get the document snapshot
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();

        // if a document exists, convert document to Person object and return it
        Person person;
        if(document.exists())
        {
            person = document.toObject(Person.class);
            return person;
        }

        // returns null if document not found
        return null;
    }

    // update a document based on its id
    public String updatePerson(Person person) throws ExecutionException, InterruptedException
    {
        // use set() method to update object
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("people").document(person.getDocument_id()).set(person);

        // return update time if successful
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    // delete a document based on its id
    public String deletePerson(String document_id)
    {
        // use the delete() method to delete document, then return message specifying deleted document id
        dbFirestore.collection("people").document(document_id).delete();
        return "delete successful: " + document_id;
    }

}
