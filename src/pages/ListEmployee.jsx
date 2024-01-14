import '../css/ListEmployee.css';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DataTable from 'react-data-table-component';
import FilterComponent from '../components/FilterComponent/FilterComponent';
import CONSTANTS from '../utils/constants';


function ListEmployee() {
    const { employeeList } = useSelector((state) => state.save)

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = employeeList.filter(
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
                    columns={CONSTANTS.TABLE_COLUMNS}
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