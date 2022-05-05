package com.sam.springfirebase;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

@SpringBootApplication
public class SpringFirebaseApplication
{

    public static void main(String[] args) throws IOException
    {
        // boilerplate here: set up a loader object to read serviceAccount file, then initialize db from the file info
        ClassLoader classLoader = SpringFirebaseApplication.class.getClassLoader();

        File file = new File(Objects.requireNonNull(classLoader.getResource("serviceAccountKey.json")).getFile());
        FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

        // set credentials from the serviceAccount file
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                        .build();

        FirebaseApp.initializeApp(options);

        SpringApplication.run(SpringFirebaseApplication.class, args);
    }

}
