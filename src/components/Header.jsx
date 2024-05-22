import React, { useState } from "react";
import NotesIcon from "@mui/icons-material/Notes";
import { Zoom } from "@mui/material";

function Header({ value, onChange, clearSearch }) {
  return (
    <header>
      <h1 className="text-2xl">
        <NotesIcon></NotesIcon>Keep App
      </h1>

      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={value}
            onChange={onChange}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm  bg-gray-50 SearchBar"
            placeholder="Search "
            required
          />

          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-yellow-600 rounded-lg text-sm px-4 py-1"
            onClick={clearSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
