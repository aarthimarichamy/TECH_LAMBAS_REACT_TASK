import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EmployeeTable = ({ employees }) => {
  return (
    <div>
        <table className="employee-table">
            <thead className="employee-table-header">
                <tr>
                    <th className='employee-table-header-cell'>S.No</th>
                    <th className='employee-table-header-cell'>Employee Name</th>
                    <th className='employee-table-header-cell'>Mobile Number</th>
                    <th className='employee-table-header-cell'>City</th>
                    <th className='employee-table-header-cell'>Gender</th>
                    <th className='employee-table-header-cell'>Work Type</th>
                    <th className='employee-table-header-cell'>Action</th>
                </tr>
            </thead>
            <tbody className="employee-table-body">
                {employees.map((employee, index) => (
                    <tr key={index} className="employee-table-row">
                        <td className='employee-table-cell'>{index + 1}</td>
                        <td className='employee-table-cell'>{employee.name}</td>
                        <td className='employee-table-cell'>{employee.phone}</td>
                        <td className='employee-table-cell'>{employee.city}</td>
                        <td className='employee-table-cell'>{employee.gender}</td>
                        <td className='employee-table-cell'>{employee.worktype}</td>
                        <td>
                            <div className="action-icons">
                            <FaEdit className="edit-icon" />
                            <FaTrash className="delete-icon" />
                            </div>
                         </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default EmployeeTable
