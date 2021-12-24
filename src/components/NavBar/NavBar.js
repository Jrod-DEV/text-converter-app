import React from 'react';

export const NavBar = () => {
  return (
    <nav class="bg-gray-100 fixed">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <p class="absolute inset-x-0 top-0 h-16">TEXT CONVERTER!!</p>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  );
};
