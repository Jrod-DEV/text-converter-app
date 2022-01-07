import React, { useState } from 'react';
import { TextTypes } from '../helpers/textConverter';
import { useDarkMode } from '../hooks/useDarkMode';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

import { NavBar } from './NavBar/NavBar';
import './App.css';

const notify = () =>
  toast.success('Text copied to clipboard', { position: 'bottom-center' });

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

  const inverseCase = () => {
    setValue(TextTypes.inverseType(value));
  };

  useDarkMode();
  return (
    <div className="min-h-screen dark:bg-black transition duration-500">
      <header className="pb-40">
        <NavBar />
      </header>

      <div className="text-container">
        <div>
          <div className="mb-4">
            <button
              className="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50"
              onClick={lowerCase}
            >
              lowerCase
            </button>
            <button
              className="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-1"
              onClick={upperCase}
            >
              UPERCASE
            </button>
            <button
              className="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-1"
              onClick={reverse}
            >
              REVERSE
            </button>
            <button
              className="selecButton bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-1"
              onClick={inverseCase}
            >
              InverseCase
            </button>
          </div>

          <textarea
            className="textInput dark:bg-slate-600 dark:text-indigo-100"
            name="textarea"
            rows="10"
            cols="50"
            value={value}
            onChange={handleChange}
          ></textarea>

          <div>
            <button className="clearBtn mt-4" onClick={clearForm}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="copy-container flex justify-center m-8">
        <CopyToClipboard text={value}>
          <div
            className="flex justify-between resultantText border-2 dark:text-indigo-50 p-4"
            onClick={notify}
          >
            <p>{value}</p>
            <button className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-indigo-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
            <Toaster />
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};
