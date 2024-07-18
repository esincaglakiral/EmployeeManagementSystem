import React from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const EmployeeList = ({ employees, fetchEmployees, setEditEmployee }) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7206/api/employees/${id}`);
      fetchEmployees();
      alert('Employee deleted successfully!');
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee. Please try again.');
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.age}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => setEditEmployee(employee)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(employee.id)} sx={{ ml: 2 }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
