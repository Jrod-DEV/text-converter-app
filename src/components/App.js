import React from 'react';
import { NavBar } from './NavBar/NavBar';

import './App.css';

export const App = () => {
  return (
    <div class="container mx-auto px-4">
      <h1 class=" text-cyan-600">Play with your texts!</h1>
      <div class="static">
        <hr />
        <form class="mainForm">
          <select name="select" id="">
            <option>To CamelCase</option>
            <option>TO UPERCASE</option>
            <option>to lowercase</option>
            <option>to Reverse</option>
          </select>

          <textarea rows="5" cols="50">
            Write something here...
          </textarea>

          <button class="convertBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
