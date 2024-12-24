# Candidate List Viewer

This repository contains **Task 1: Candidate List Viewer**, a project that demonstrates a simple React application for viewing a list of candidates, with a backend API built using Node.js/Express. The application supports searching and sorting features for improved usability.

## Project Overview

### Features:
- **Backend API**:
  - Built using Node.js and Express.
  - Serves a hardcoded list of 10 candidate objects through a single API endpoint: `/api/candidates`.
  - Each candidate object includes the following fields:
    - **Name**
    - **Skills**
    - **Years of Experience**

- **Frontend Application**:
  - Built using React and styled with Tailwind CSS.
  - Fetches data from the backend API and displays it in a table format.
  - Includes a search bar to filter candidates by **Name** or **Skills**.
  - Implements a sorting feature to order candidates by **Years of Experience** (Bonus Part).

---

## File Structure

```plaintext
/
├── backend/
│   ├── server.js             # Backend server code
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CandidateTable.jsx  # Table component to display candidates
│   │   │   ├── SearchBar.jsx       # Search bar component
│   │   │   └── LoadingSpinner.jsx  # Loading spinner component
│   │   ├── App.jsx                 # Main React component
│   │   ├── index.css               # Tailwind CSS styles
│   │   └── main.jsx                # React entry point
│   ├── vite.config.js              # Vite configuration
│   ├── index.html                  # HTML template
│   └── package.json                # Frontend dependencies
```

---

## Screenshots

### 1. Candidate List Viewer
This is the main page of the application, displaying the list of candidates fetched from the backend API.

![Candidate List Viewer](/static/Screenshot%20(203).png)

### 2. Search Functionality
The search bar filters candidates by **Name** or **Skills**.

![Search Functionality](/static/Screenshot%20(205).png)

### 3. Sorting by Years of Experience (Bonus Part)
The sorting feature orders candidates based on their **Years of Experience**.

![Sorting Feature](/static/Screenshot%20(204).png)

---


Endpoint:
- **GET** `/api/candidates`: Returns the list of candidates.

---

## Bonus Feature: Sorting

Candidates can be sorted by their **Years of Experience** using the sorting feature on the frontend.

![Bonus Feature - Sorting](/static/Screenshot%20(204).png)

---

## Technologies Used
- **Frontend**:
  - React
  - Tailwind CSS
  - Vite

- **Backend**:
  - Node.js
  - Express

---

## Future Enhancements
- Add a database for dynamic data handling.
- Implement pagination for large datasets.
- Enhance the UI with more advanced components.

---



