import { useEffect, useState } from "react";
import Filter from "./components/FIlter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      return alert(` ${newName} is already added to phonebook`);
    }
    const NewPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(NewPerson));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  const getPersonsFromServer = () => {
    axios.get("http://localhost:3001/persons").then((resonse) => {
      console.log("Promise Fullfilled");
      setPersons(resonse.data);
    });
  };

  useEffect(getPersonsFromServer, []);

  const personsToShow =
    searchName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchName.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
}

export default App;
