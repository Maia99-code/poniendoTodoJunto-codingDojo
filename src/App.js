import React, { useState } from 'react';
import { PersonCard } from './PersonCard';
import './App.css';

function App() {
  const [personData, setPersonData] = useState([
    { firstName: "John", lastName: "Doe", age: 30, hairColor: "Brown" },
    { firstName: "Jane", lastName: "Smith", age: 25, hairColor: "Blonde" },
    { firstName: "Homer", lastName: "Thomson", age: 35, hairColor: "Black" },
    { firstName: "Marge", lastName: "Simpson", age: 28, hairColor: "Red" }
  ]);

  const increaseAge = (index) => {
    const updatedPersonData = [...personData];
    updatedPersonData[index].age += 1;
    setPersonData(updatedPersonData);
  };

  return (
    <div className='container'>
      {personData.map((person, index) => (
        <PersonCard
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
          increaseAge={() => increaseAge(index)}
        />
      ))}
    </div>
  );
}

export default App;
