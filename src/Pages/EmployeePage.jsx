import React from 'react';
import { useState } from 'react';
import EmployeeTable from '../Components/EmployeeTable';
import AddEmployeeForm from '../Components/AddEmployeeForm';
import './EmployeePage.css'; 
import { FaBell } from "react-icons/fa";

const EmployeePage = () => {
    const [employees, setEmployees] = useState([
        { name: "Aarthi ", phone: "1234567890", city: "Kovilpatti", gender: "Female", worktype: "Full Time" },
        { name: "Adithya ", phone: "0987654321", city: "Salem", gender: "Male", worktype: "Part Time" },
        { name: "Marichamy ", phone: "7707706543", city: "Madurai", gender: "Male", worktype: "Full Time" },
    ]);
    const [showForm, setShowForm] = useState(false);
    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
        // setShowForm(false);
    };
  return (
    <div className="employee-page-wrapper">
            
            <div className="employee-left-section">
                <h1 className="company-name">
                <span className="tech-text">Tech</span><span className="lambdas-text">Lambdas</span>
                </h1>
            </div>

            <div className="employee-right-section">
                <div className="top-bar">
                    <h2 className="employee-view-text">Employee View</h2>
                    <div className="notification-icon"><FaBell /></div>
                </div>
                <hr className="separator-line" />
                <div className="add-employee-header">
                    <h3 className="add-employee-text">All Employee</h3>
                    <button className="add-employee-button" onClick={() => setShowForm(true)}>
                    <span className="plus-icon">+</span> Add New</button>
                </div>

                <div className="employee-content-container">
                    <div className="employee-table-container">
                        <EmployeeTable employees={employees} />
                    </div>
                </div>

                {showForm && (
                    <>
                        <div className="overlay"></div>
                        <AddEmployeeForm addEmployee={addEmployee} setShowForm={setShowForm} />
                    </>
                )}
            </div>
        </div>
  );
};

export default EmployeePage
