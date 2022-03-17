import './App.css';
import { Dropdown, form } from 'react-bootstrap';
import { React, useState } from 'react';
import userQuery from './Query.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // used to call the query function from Query.js, specified using dropdown menu
  const [operation, setOperation] = useState("CREATE");

  // call the userQuery using the operation and the user's input field onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    userQuery(operation, name);
  }

  return (
    <div className="App">

      <h1 className="Header">WELCOME TO THE FIRESTORE TEST PROGRAM</h1>

      <div className="Query-text-box">
        <h6> The query operation is: {operation}, click on the query type button to change the operation! </h6>
      </div>

      <form className="Form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">What would you like to do?</label>
          <input type="form" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Query Here" />
        </div>
        <small>This will send a request to the firestore "names" collection </small>
        <h2></h2>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <Dropdown className="Dropdown">
        <Dropdown.Toggle id="dropdown-basic">
          Query Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={e => setOperation("CREATE")}>CREATE</Dropdown.Item>
          <Dropdown.Item onClick={e => setOperation("DELETE")}>DELETE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
