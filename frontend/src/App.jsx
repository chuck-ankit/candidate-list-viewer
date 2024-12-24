import React, { useState, useEffect } from 'react';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('desc'); 

  useEffect(() => {
    fetch('http://localhost:3001/api/candidates')
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
        setFilteredCandidates(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching candidates:', error));
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredCandidates(filtered);
  };

  // New function to handle sorting
  const handleSort = () => {
    const sortedCandidates = [...filteredCandidates].sort((a, b) => {
      return sortOrder === 'asc'
        ? a.yearsOfExperience - b.yearsOfExperience
        : b.yearsOfExperience - a.yearsOfExperience;
    });
    setFilteredCandidates(sortedCandidates);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-diesel-50 text-diesel-900 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-diesel-700 mb-8 w-full text-center p-4 mt-0 ms-0 bg-diesel-100">Candidate Viewer</h1>
      <div className="w-full max-w-3xl m-4 mb-6">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <CandidateTable candidates={filteredCandidates} onSort={handleSort} sortOrder={sortOrder} />
        )}
      </div>
    </div>
  );
};

export default App;
