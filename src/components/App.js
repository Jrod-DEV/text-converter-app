import React, { useState } from 'react';
import { TextTypes } from '../helpers/textConverter';
import { useDarkMode } from '../hooks/useDarkMode';
/* import { lowercase, reverse, uppercase } from '../helpers/textConverter'; */

import './App.css';
import { NavBar } from './NavBar/NavBar';

export const App = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const clearForm = () => {
    setValue('');
  };

  const lowerCase = () => {
    setValue(TextTypes.lowercase(value));
  };

  const upperCase = () => {
    setValue(TextTypes.uppercase(value));
  };

  const reverse = () => {
    setValue(TextTypes.reverse(value));
  };

  useDarkMode();
  return (
    <div class="min-h-screen dark:bg-black transition duration-500">
      <header class="pb-40">
        <NavBar />
      </header>

      {/*      <header>
        <p class="bg-blue-400 text-blue-600 dark:text-white dark:bg-black">
          Play with your texts!
        </p>
      </header> */}

      <div class="text-container">
        <hr />
        <div>
          <div>
            <button
              class="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50 "
              onClick={lowerCase}
            >
              lowerCase
            </button>
            <button
              class="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50 "
              onClick={upperCase}
            >
              UPERCASE
            </button>
            <button
              class="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50 "
              onClick={reverse}
            >
              REVERSE
            </button>
          </div>
          {/*  onChange={lowerCase}>lowercase  */}

          <textarea
            class="textInput"
            name="textarea"
            rows="10"
            cols="50"
            value={value}
            onChange={handleChange}
          ></textarea>

          <div>
            <button class="clearBtn" onClick={clearForm}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="resultantText dark:text-indigo-50">{value}</p>
      </div>
    </div>
  );
};
