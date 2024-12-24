// Backend: server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Hardcoded candidate data
const candidates = [
  { name: 'Ankit Kumar', skills: ['JavaScript', 'React', 'Node.js'], yearsOfExperience: 5 },
  { name: 'Aditya keshri', skills: ['Java', 'Spring', 'Hibernate'], yearsOfExperience: 7 },
  { name: 'Hritik Negi', skills: ['Python', 'Django', 'Flask'], yearsOfExperience: 4 },
  { name: 'Dev Gupta', skills: ['C#', '.NET', 'Azure'], yearsOfExperience: 6 },
  { name: 'Neha Sharma', skills: ['Ruby', 'Rails', 'PostgreSQL'], yearsOfExperience: 3 },
  { name: 'Puja Gupta', skills: ['PHP', 'Laravel', 'MySQL'], yearsOfExperience: 8 },
  { name: 'Kajal ', skills: ['Go', 'Kubernetes', 'Docker'], yearsOfExperience: 2 },
  { name: 'Priyanshu Talyan', skills: ['Swift', 'iOS', 'Objective-C'], yearsOfExperience: 5 },
  { name: 'Robin Singh', skills: ['Kotlin', 'Android', 'Firebase'], yearsOfExperience: 6 },
  { name: 'Sumit Singh', skills: ['HTML', 'CSS', 'JavaScript'], yearsOfExperience: 1 }
];

// API Endpoint
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});