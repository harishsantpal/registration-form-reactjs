import React from 'react'
import './registration.css'
import { useState } from 'react'
import Modal from './Modal';

export default function Registration() {

    const errors = {};
    const initialValue = { userName: '', userEmail: '', userPassword: '' };
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const [openModal, setOpenModal] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormValues = { ...formValues, [name]: value };


        const updatedFormErrors = { ...formErrors };
        if (name === 'userName') {
            delete updatedFormErrors.userName;
        }
        else if (name === 'userEmail') {
            delete updatedFormErrors.userEmail;
        }
        else if (name === 'userPassword') {
            delete updatedFormErrors.userPassword;
        }

        setFormValues(updatedFormValues);
        setFormErrors(updatedFormErrors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        console.log('User Name ' + formValues.userName +
            '\nUser Email : ' + formValues.userEmail +
            '\nUser Password : ' + formValues.userPassword);

        if (Object.keys(errors).length === 0) {
            setFormValues(initialValue);
           setOpenModal(true);
        }
    }

    const handleReset = (e) => {
        setFormValues(initialValue);
    }


    const validate = (values) => {
        if (!values.userName) {
            errors.userName = '* Name is required';
        }
        else if (!values.userEmail) {
            errors.userEmail = '* Email ID is required';
        }
        else if (!values.userPassword) {
            errors.userPassword = '* Password is required';
        }
        else if (values.userPassword.length < 5) {
            errors.userPassword = '* Password contains atleast 5 characters'
        }
        else if (values.userPassword.length > 8) {
            errors.userPassword = '* Password contains max 8 characters'
        }

        return errors
    }


    return (


        <div>

            



            <div className='container'>

                <form className='formData' onSubmit={handleSubmit}>
                    <h1>Registration Form</h1>
                    <div className="field">
                        <lable className="lableData"> Name</lable>
                        <input type="text" name='userName' className="inputData" placeholder='Enter Name'
                            value={formValues.userName} onChange={handleChange}  />
                    </div>
                    <p>{formErrors.userName}</p>
                    <div className="field">
                        <lable className="lableData"> Email</lable>
                        <input type="email" name='userEmail' className="inputData" placeholder='Enter Email ID'
                            value={formValues.userEmail} onChange={handleChange} />
                    </div>
                    <p>{formErrors.userEmail}</p>
                    <div className="field">
                        <lable className="lableData"> Password</lable>
                        <input type="password" name='userPassword' className="inputData" placeholder='Enter Password'
                            value={formValues.userPassword} onChange={handleChange}  />
                    </div>
                    <p>{formErrors.userPassword}</p>

                    <div className='buttons'>
                        <input type='reset' className='btn-reset' value='Cancel' onClick={handleReset} />
                        <button className='btn'>Register</button>

                    </div>


                </form>

            </div>
            {
                openModal && <Modal closeModal={setOpenModal} />
            }
        </div>
    )
}
