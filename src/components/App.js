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
    setValue('');
  };

  return (
    <div class="container mx-auto px-4">
      <header>
        <p class="text-cyan-600">Play with your texts!</p>
      </header>
      <div class="static">
        <hr />
        <form class="mainForm">
          <select name="select" id="">
            <option>CamelCase</option>
            <option>UPERCASE</option>
            <option>lowercase</option>
            <option>Reverse</option>
          </select>

          <textarea name="textarea" rows="5" cols="50" onChange={handleChange}>
            Write something here...
          </textarea>

          <button class="convertBtn" type="submit">
            Submit
          </button>
          <button class="clearBtn" onclick={clearForm}>Clear</button>
        </form>
      </div>
    </div>
  );
};
