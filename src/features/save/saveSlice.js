import { createSlice } from '@reduxjs/toolkit'
// import data from '../../data/testData'

const  initialState = {
    employeeList:[
        {
            id: 1,
            firstname: 'Lauriane',
            lastname: 'Ernser',
            startDate: "25/12/2024",
            department: "Engineering",
            dateOfBirth: "16/11/1991",
            street: "408 Carter Parks Apt. 269",
            city: "Beahanfort",
            state: "NE",
            zipCode: "03694-2009",
        },
    ],
}

/* const initialState = {
    employeeList: data
}*/

const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employeeList = [...state.employeeList, action.payload]
        },
    },
})

export const { addEmployee } = saveSlice.actions
export const employees = (state) => state.save.employeeList
export default saveSlice.reducer
