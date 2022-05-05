import NavBar from "../Components/navBar.js";
import { Button } from 'react-bootstrap';
import userQuery from '../Functions/Query.js';

export default function ViewDB() {
    // this is where we store the document objects that the query returns
    let names = [];

    const handleClick = async () => {
        // this isn't working, figure out why
        const query = userQuery("GETALL");

        console.log("here");
        console.log(Object.keys(query).length);

    }

    return (

        <div>
            <NavBar />
            <Button onClick={handleClick}> Click to view all names! </Button>


        </div>

    );
}