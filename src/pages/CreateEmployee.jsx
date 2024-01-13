import '../css/CreateEmployee.css';
import departmentList from '../data/department.json';
import statesList from '../data/states.json';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/save/saveSlice';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SelectMenu } from '@leoncik/p14-hrnet-plugin';

function CreateEmployee() {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    let statesNameArray = [];
    let statesAbbreviationArray = [];
    statesList.map((infos) => (
        statesNameArray.push(infos.name)
    ))
    statesList.map((infos) => (
        statesAbbreviationArray.push(infos.abbreviation)
    ))

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const { employeeList } = useSelector((state) => state.save)

    const submitForm = (data) => {
        data.id = employeeList.length+1
        data.dateOfBirth = `${dateOfBirth.getMonth()+1}/${dateOfBirth.getDate()}/${dateOfBirth.getFullYear()}`;
        data.startDate = `${startDate.getMonth()+1}/${startDate.getDate()}/${startDate.getFullYear()}`;
        data.state = document.querySelector('#state').childNodes[0].getAttribute('value');
        data.department = document.querySelector('#departmentSelectMenu').childNodes[0].getAttribute('value');
        dispatch(addEmployee(data))
    }

    return(
        <main className='main-createEmployee'>
            <header className='main-header'>
                <h1>HRnet</h1>
                <nav>
                    <Link to={"/"} className='btn'>Home</Link>
                    <Link to={"/list"} className='btn'>View Current Employees</Link>
                </nav>
            </header>
            
            <section className='subtitle'>
                <h2>Create Employee</h2>
            </section>
            <section className='form-data'>
                <form onSubmit={handleSubmit(submitForm)} id='createEmployee-form'>
                    <label htmlFor='first-name'>First Name</label>
                    <input id='first-name' type='text' {...register("firstname")}/>

                    <label htmlFor='last-name'>Last Name</label>
                    <input id='last-name' type='text' {...register("lastname")} />

                    <label htmlFor='date-of-birth'>Date of Birth</label>
                    <DatePicker 
                        id='date-of-birth'
                        showIcon
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                        closeOnScroll={true}
                    />
                    

                    <label htmlFor='start-date'>Start Date</label>
                    <DatePicker 
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        closeOnScroll={true}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" {...register("street")}/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" {...register("city")} />

                        <label htmlFor="state">State</label>
                        <SelectMenu
                            id='state' 
                            options={statesNameArray}
                            optionsValues={statesAbbreviationArray}
                            width={"298"}
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" {...register("zipCode")} />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <SelectMenu id='departmentSelectMenu'
                        options={departmentList}
                        optionsValues={departmentList}
                        width={"330"}
                    />

                    <div className='sumbitForm-container'>
                        <button type='submit' className='btn'>Save</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default CreateEmployee;