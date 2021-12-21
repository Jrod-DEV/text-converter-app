import React from 'react';

export const App = () => {
  return (
    <>
      <h1 class="text-cyan-600">Play with your text!</h1>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <hr />

      <div class="relative h-32 w-32">
        <form class="absolute inset-0">
          <select name="select" id="">
            <option>To CamelCase</option>
            <option>TO UPERCASE</option>
            <option>to lowercase</option>
          </select>

          <label for="text"></label>
          <textarea name="textarea" rows="5" cols="50">
            Write something here
          </textarea>

          <button name="convert-text" type="submit">
            Convert
          </button>
        </form>
      </div>
    </>
  );
};
