import './FilterComponent.css'

function FilterComponent({ filterText, onFilter, onClear }) {
    return(
        <div className='searchContainer'>
            <input className='searchInput' id='search' type='text' placeholder='Search' value={filterText} onChange={onFilter} />
            <button className='searchButton' onClick={onClear}>X</button>
        </div>
    )
}

export default FilterComponent