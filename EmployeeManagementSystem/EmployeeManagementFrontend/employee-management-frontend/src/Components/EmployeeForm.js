import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const EmployeeForm = ({ fetchEmployees, editEmployee, setEditEmployee }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setAge(editEmployee.age);
      setDepartment(editEmployee.department);
    } else {
      setName('');
      setAge('');
      setDepartment('');
    }
  }, [editEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, age, department };

    try {
      if (editEmployee) {
        await axios.put(`https://localhost:7206/api/employees/${editEmployee.id}`, newEmployee);
        setEditEmployee(null);
      } else {
        await axios.post('https://localhost:7206/api/employees', newEmployee);
      }
      setName('');
      setAge('');
      setDepartment('');
      fetchEmployees();
      alert('Employee saved successfully!');
    } catch (error) {
      console.error('Error saving employee:', error);
      alert('Failed to save employee. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          {editEmployee ? 'Edit Employee' : 'Add Employee'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
            margin="normal"
            required
            type="number"
          />
          <TextField
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
            {editEmployee ? 'Update Employee' : 'Add Employee'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EmployeeForm;
