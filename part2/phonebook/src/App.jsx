import { useState } from 'react';
import Filter from './components/Filter.jsx';
import PersonForm from './components/PersonForm.jsx';
import Persons from './components/Persons.jsx';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  }

  const handleAddNewName = (event) => {
    event.preventDefault();

    // Check if the name already exists
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleAddNewName={handleAddNewName}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App;