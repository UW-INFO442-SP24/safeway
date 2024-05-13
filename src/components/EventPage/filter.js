import React, { useState } from 'react';

const Filter = ({ onFilterChange, schools }) => {
    const [school, setSchool] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ school });
    };

    return (
        <div>
            <h3>Filter Events</h3>
            <select
                value={school}
                onChange={(e) => setSchool(e.target.value)}
            >
                <option value="">Select School</option>
                {schools.map((schoolName, index) => (
                    <option key={index} value={schoolName}>{schoolName}</option>
                ))}
            </select>
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default Filter;
