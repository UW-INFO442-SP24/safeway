import React, { useState } from 'react';

const Filter = ({ onFilterChange, schools }) => {
    const [school, setSchool] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ school });
    };

    return (
        <div className="filter-container">
            <select
                value={school}
                onChange={(e) => setSchool(e.target.value)}
            >
                <option value="">All Schools</option>
                {schools.map((schoolName, index) => (
                    <option key={index} value={schoolName}>{schoolName}</option>
                ))}
            </select>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default Filter;
