import '../Styles/home.css';
import { Dropdown, Button } from 'react-bootstrap';
import { React, useState } from 'react';
import userQuery from '../Functions/Query.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Components/navBar.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
    // used to call the query function from Query.js, specified using dropdown menu
    const [operation, setOperation] = useState("CREATE");

    // call the userQuery using the operation and the user's input field onSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        userQuery(operation, name);
    }

    // change path when clicking the see more btn
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/viewdb");
    }

    return (
        <div>
            {/* display navBar */}
            <NavBar />
            <section className="Main">
                <h1 className="Header">WELCOME TO THE FIRESTORE TEST PROGRAM</h1>

                <div className="Query-text-box">
                    {/* confirm current query operation using operation state (defaults to CREATE) */}
                    <h6> The query operation is: {operation}, click on the query type button to change the operation! </h6>
                </div>

                {/* form for user to input document name */}
                <form className="Form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="form">What would you like to do?</label>
                        <input type="form" className="form-control" id="form" aria-describedby="emailHelp" placeholder="Enter Query Here" />
                    </div>
                    <small>This will send a request to the firestore "names" collection </small>
                    <h2></h2>

                    {/* form submit btn that calls the handleSubmit() function */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                {/* dropdown for user to chose query type */}
                <Dropdown className="Dropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                        Query Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={e => setOperation("CREATE")}>CREATE</Dropdown.Item>
                        <Dropdown.Item onClick={e => setOperation("DELETE")}>DELETE</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* btn to jump to viewDB page */}
                <Button className="see-more-btn" onClick={handleClick}>
                    Click to see more!
                </Button>
            </section>
        </div>
    );
}