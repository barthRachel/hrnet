import { createSlice } from '@reduxjs/toolkit'
//import data from '../../data/testData'

const  initialState = {
    employeeList: [
        {
            id: 1,
            firstname: 'Rachel',
            lastname: 'Barthelery',
            startDate: "16/01/2024",
            department: "Sales",
            dateOfBirth: "03/05/1999",
            street: "26 rue de Paris",
            city: "Epinay-sur-Seine",
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