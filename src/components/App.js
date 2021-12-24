import React from 'react';
import { NavBar } from './NavBar/NavBar';

import './App.css';

export const App = () => {
  return (
    <div class="container mx-auto px-4">
      <h1 class=" text-cyan-600">Play with your texts!</h1>
      <div class="static">
        <hr />
        <form class="inline-block">
          <select name="select" id="">
            <option>To CamelCase</option>
            <option>TO UPERCASE</option>
            <option>to lowercase</option>
          </select>

          <label for="text">Text</label>
          <textarea rows="5" cols="50">
            Write something here
          </textarea>

          <button class="" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
