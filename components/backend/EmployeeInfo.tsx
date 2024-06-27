'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

export default  function EmployeeInfo() {
    const [employees, setEmployees] = useState([]);
    const [restingEmployees, setRestingEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState('');

    // Fetch employee data from JSON
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/get-employee');
                setEmployees(response.data.employees || []);
                setRestingEmployees(response.data.rest || []);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, []);


    const updateEmployees = async (updatedEmployees, updatedRest) => {
        try {
            console.log(updatedEmployees)
            console.log(updatedRest)

            await axios.post('/api/update-employee', { employees: updatedEmployees, rest: updatedRest });
            setEmployees(updatedEmployees);
            setRestingEmployees(updatedRest);
        } catch (error) {
            console.error('Error updating employees:', error);
        }
    };
    // Move employee to resting
    const handleRest = (employee) => {
        const updatedEmployees = employees.filter((e) => e !== employee);
        const updatedRest = [...restingEmployees, employee];
        updateEmployees(updatedEmployees, updatedRest);
    };

    // Move employee to working
    const handleWork = (employee) => {
        const updatedRest = restingEmployees.filter((e) => e !== employee);
        const updatedEmployees = [...employees, employee];
        updateEmployees(updatedEmployees, updatedRest);
    };

    // Add new employee
    const handleAddEmployee = () => {
        if (newEmployee.trim()) {
            const updatedEmployees = [...employees, newEmployee.trim()];
            updateEmployees(updatedEmployees, restingEmployees);
            setNewEmployee('');
        }
    };

    // Delete employee
    const handleDeleteEmployee = (employee) => {
        const updatedEmployees = employees.filter((e) => e !== employee);
        updateEmployees(updatedEmployees, restingEmployees);
    };
    return (
        <div className="flex flex-col justify-between p-4">
            <h1 className="text-2xl font-bold">Employee Management</h1>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="py-2">Status</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td className="py-2">Working</td>
                        <td className="py-2">{employee}</td>
                        <td className="py-2">$0.00</td>
                        <td className="py-2">
                            <Button onClick={() => handleRest(employee)}>Rest</Button>
                            <Button onClick={() => handleDeleteEmployee(employee)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                {restingEmployees.map((employee, index) => (
                    <tr key={index}>
                        <td className="py-2">Resting</td>
                        <td className="py-2">{employee}</td>
                        <td className="py-2">$0.00</td>
                        <td className="py-2">
                            <Button onClick={() => handleWork(employee)}>Work</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="mt-4">
                <input
                    type="text"
                    value={newEmployee}
                    onChange={(e) => setNewEmployee(e.target.value)}
                    placeholder="New employee name"
                    className="border p-2"
                />
                <Button onClick={handleAddEmployee}>Add Employee</Button>
            </div>
        </div>
    );
};

