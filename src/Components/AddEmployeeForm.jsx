import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddEmployeeForm.css';
import { FaTimes } from 'react-icons/fa';

const AddEmployeeForm = ({ addEmployee, setShowForm }) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        city: "",
        gender: "",
        worktype: "",
    });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "phone") {
            if (!/^\d*$/.test(value)) {
                return;
            }
            if (value.length > 10) {
                toast.error("Phone number cannot exceed 10 digits.");
                return;
            }
        }
    
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, gender, worktype } = form;
        if (!name || !phone || !gender || !worktype) {
            toast.error("All fields are required. Only Location is optional.");
            return;
        }
        if (phone.length !== 10) {
            toast.error("Phone number must be 10 digits long.");
            return;
        }
        if (isNaN(phone)) {
            toast.error("Phone number must be numeric.");
            return;
        }
        addEmployee(form);        
        toast.success("Employee added successfully!");
        setTimeout(() => {
            setShowForm(false);
        }, 1000)
        setTimeout(() => {
            setForm({
                name: "",
                phone: "",
                city: "",
                gender: "",
                worktype: "",
            });
            setShowForm(false);    
        }, 2200);
    };
    
    const handleCancel = () => {
        setShowForm(false);
    };
  return (
    <div className="add-employee-form-panel">
        <div className="form-header">
                <h2 className='add-new-employee-heading'>Add New Employee</h2>
                <button className="close-button" onClick={handleCancel}><FaTimes /></button>
        </div>
        <form onSubmit={handleSubmit} className="add-employee-form">
            {error && <p className="error-message">{error}</p>}
            
            <label className="add-employee-form-label">Employee Name<span className="mandatory">*</span></label>
            <input type="text" name="name" placeholder="Ex : Peter" value={form.name}
                onChange={handleChange}  className="add-employee-form-input" />

            <label className="add-employee-form-label">Mobile Number<span className="mandatory">*</span></label>
            <input type="text" name="phone" placeholder="Ex : 1234567890" value={form.phone}
                onChange={handleChange}  className="add-employee-form-input" />

            <label className="add-employee-form-label">Location</label>
            <input type="text" name="city" placeholder="Ex : Kovilpatti" value={form.city}
                onChange={handleChange} className="add-employee-form-input" />

            <label className="add-employee-form-label">Gender<span className="mandatory">*</span></label>
                <div className="gender-options">
                    <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male</label>
                    <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female</label>
                </div>

                <label className="add-employee-form-label">Work Type<span className="mandatory">*</span></label>
                <select name="worktype" value={form.worktype} onChange={handleChange}
                    className="add-employee-form-input">
                    <option value="">Select</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Intern">Intern</option>
                </select>

                <div className="button-container">
                    <button type="button" onClick={handleCancel} className="cancel-button">CANCEL</button>
                    <button type="submit" className="submit-button">SUBMIT</button>
                </div>
        </form>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            style={{ zIndex: 2000 }} 
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable/>
    </div>
  );
};

export default AddEmployeeForm
