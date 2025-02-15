import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">University Insights</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/login" className="hover:text-gray-200">Login</a>
          <a href="/register" className="hover:text-gray-200">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;