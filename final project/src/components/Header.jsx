import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-almostWhite shadow-md">
      <h1 className="text-2xl font-bold">snap</h1>
      <nav className="relative">
        <button
          className="relative font-medium text-mediumGray"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          Features
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded">
            <li className="px-4 py-2 hover:bg-almostWhite">Todo List</li>
            <li className="px-4 py-2 hover:bg-almostWhite">Calendar</li>
            <li className="px-4 py-2 hover:bg-almostWhite">Reminders</li>
            <li className="px-4 py-2 hover:bg-almostWhite">Planning</li>
          </ul>
        )}
      </nav>
      <div className="space-x-4">
        <button className="text-mediumGray">Login</button>
        <button className="border px-4 py-2 rounded bg-almostBlack text-white">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
