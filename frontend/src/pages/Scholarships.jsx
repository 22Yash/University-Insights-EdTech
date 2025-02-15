import React, { useEffect, useState } from 'react';
import { getScholarships, searchScholarships } from '../services/api';

function Scholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    const data = await getScholarships();
    setScholarships(data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchScholarships(searchQuery);
    setScholarships(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Scholarship Finder</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scholarships..."
            className="w-1/2 p-2 border rounded-l"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <div key={scholarship._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{scholarship.name}</h2>
            <p className="text-gray-700 mb-4">{scholarship.description}</p>
            <p className="text-gray-600"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <p className="text-gray-600"><strong>Amount:</strong> ${scholarship.amount}</p>
            <p className="text-gray-600"><strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scholarships;