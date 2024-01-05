import '../css/CreateEmployee.css';
import departmentList from '../data/department.json';
import statesList from '../data/states.json';
import { Link } from 'react-router-dom';

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
                <form action='#' id='createEmployee-form'>
                    <label htmlFor='first-name'>First Name</label>
                    <input id='first-name' type='text' />

                    <label htmlFor='last-name'>Last Name</label>
                    <input id='last-name' type='text' />

                    <label htmlFor='date-of-birth'>Date of Birth</label>
                    <DatePicker 
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
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <SelectMenu 
                            options={statesNameArray}
                            optionsValues={statesAbbreviationArray}
                            width={"298"}
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <SelectMenu id='departmentSelectMenu'
                        options={departmentList}
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