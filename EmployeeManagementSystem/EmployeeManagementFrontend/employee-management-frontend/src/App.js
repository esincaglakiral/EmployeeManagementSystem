import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import axios from 'axios';
import { Button } from '@mui/material';

const App = () => {
  const [editEmployee, setEditEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [showList, setShowList] = useState(false);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://localhost:7206/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleShowList = () => {
    fetchEmployees();
    setShowList(true);
  };

  return (
    <div>
      <EmployeeForm fetchEmployees={fetchEmployees} editEmployee={editEmployee} setEditEmployee={setEditEmployee} />
      <Button variant="contained" color="primary" onClick={handleShowList}>
        Show Employee List
      </Button>
      {showList && <EmployeeList employees={employees} fetchEmployees={fetchEmployees} setEditEmployee={setEditEmployee} />}
    </div>
  );
};

export default App;
