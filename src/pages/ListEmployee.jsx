import '../css/ListEmployee.css';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

import DataTable from 'react-data-table-component';
import FilterComponent from '../components/FilterComponent/FilterComponent';
import data from '../data/testData';

function ListEmployee() {
    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstname,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastname,
            sortable: true,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
            sortable: true,
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
            sortable: true,
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true,
        },
    ];

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = data.filter(
        item => item.firstname && (item.firstname.toLowerCase().includes(filterText.toLowerCase()) || 
                item.lastname.toLowerCase().includes(filterText.toLowerCase()) || 
                item.startDate.toLowerCase().includes(filterText.toLowerCase()) || 
                item.department.toLowerCase().includes(filterText.toLowerCase()) || 
                item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) || 
                item.street.toLowerCase().includes(filterText.toLowerCase()) || 
                item.city.toLowerCase().includes(filterText.toLowerCase()) || 
                item.state.toLowerCase().includes(filterText.toLowerCase()) || 
                item.zipCode.toLowerCase().includes(filterText.toLowerCase()))
    )

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);
    

    return(
        <main className='main-listEmployee'>
            <header className='main-header'>
                <h1>HRnet</h1>
                <nav>
                    <Link to={"/"} className='btn'>Home</Link>
                    <Link to={"/create"} className='btn'>Create New Employee</Link>
                </nav>
            </header>
            <section className='subtitle'>
                <h2>Current Employees</h2>
            </section>
            <section className='employee-list-wrapper'>
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                />
            </section>
        </main>
    )
}

export default ListEmployee;