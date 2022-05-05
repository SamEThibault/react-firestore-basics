package com.sam.springfirebase;

import lombok.Getter;
import lombok.Setter;

// used to auto-gen accessors and mutators using lombok
@Setter
@Getter
public class Person
{
    // matches document schema
    private String document_id;
    private String name;
    private String hobby;
}
