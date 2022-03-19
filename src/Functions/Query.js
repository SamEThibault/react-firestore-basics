import { setDoc, collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase.js';

// basic function that queries firestore depending on operation parameter, using the userInput to find or create a document
export default async function userQuery(operation, userInput) {
    const namesRef = collection(db, "names");

    if (operation === "CREATE") {
        setDoc(doc(namesRef, userInput), {
            name: userInput
        })
    }

    else if (operation === "DELETE") {
        deleteDoc(doc(db, "names", userInput));
    }


}