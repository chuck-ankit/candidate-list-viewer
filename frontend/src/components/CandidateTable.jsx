import React from 'react';

const CandidateTable = ({ candidates, onSort, sortOrder }) => {
  return (
    <table className="w-full border border-diesel-300 rounded-lg text-left text-sm text-diesel-800">
      <thead className="bg-diesel-200">
        <tr>
          <th className="border border-diesel-300 px-4 py-2">Name</th>
          <th className="border border-diesel-300 px-4 py-2">Skills</th>
          <th 
            className="border border-diesel-300 px-4 py-2 cursor-pointer" 
            onClick={onSort}
          >
            Years of Experience {sortOrder === 'asc' ? '↑' : '↓'}
          </th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-diesel-50' : 'bg-diesel-100'}
          >
            <td className="border border-diesel-300 px-4 py-2">{candidate.name}</td>
            <td className="border border-diesel-300 px-4 py-2">{candidate.skills.join(', ')}</td>
            <td className="border border-diesel-300 px-4 py-2">{candidate.yearsOfExperience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;
