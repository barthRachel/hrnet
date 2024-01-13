import { createSlice } from '@reduxjs/toolkit'
//import data from '../../data/testData'

const  initialState = {
    employeeList: [
        {
            id: 1,
            firstname: 'Beetlejuice',
            lastname: '1988',
            startDate: "25/12/24",
            department: "Sales",
            dateOfBirth: "09/06/1993",
            street: "26 rue de tqt",
            city: "Versailles",
            state: "AL",
            zipCode: "98000",
        },
    ],
}

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