import React, { useState } from 'react';
import { textConverter } from '../helpers/textConverter';
import './App.css';
// import { NavBar } from './NavBar/NavBar';

export const App = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const clearForm = () => {
    setValue(' ');
  };

  const lowerCase = (HOLA) => {
    setValue(textConverter.lowerCase(value));
  };
  console.log(lowerCase);

  return (
    <div class="container mx-auto px-4">
      <header>
        <p class="text-cyan-600">Play with your texts!</p>
      </header>
      <div class="text-container">
        <hr />
        <div>
          <div>
            <button class="selecButton">lowerCase</button>
            <button class="selecButton">UPERCASE</button>
            <button class="selecButton">REVERSE</button>
          </div>
          {/*  onChange={lowerCase}>lowercase  */}

          <textarea name="textarea" rows="10" cols="50" onChange={handleChange}>
            Write something here...
          </textarea>

          <div>
            <button class="convertBtn" type="submit">
              Submit
            </button>
            <button class="clearBtn" onClick={clearForm}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
