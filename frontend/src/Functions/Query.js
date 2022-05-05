import { setDoc, collection, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from './Firebase.js';

// basic function that queries firestore depending on operation parameter, using the userInput to find or create a document(s)
export default async function userQuery(operation, userInput) {
    const namesRef = collection(db, "people");

    // create a new document which has the input name (if it does not already exist)
    if (operation === "CREATE") {
        setDoc(doc(namesRef, userInput), {
            name: userInput

        })
    }

    // delete a specific document which has the input name
    else if (operation === "DELETE") {
        deleteDoc(doc(db, "people", userInput));
    }

    // retrieve all contents from the database to display
    else if (operation === "GETALL") {

        // var names = [];
        // let i = 0;

        const querySnapshot = getDocs(namesRef);

        return querySnapshot;
        // querySnapshot.forEach((doc) => {
        //     names[i] = doc.data().name;
        //     i++;
        // });

        // return names;
    }
}