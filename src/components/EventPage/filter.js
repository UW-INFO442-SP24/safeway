import React, { useState } from 'react';

const Filter = ({ onFilterChange, schools }) => {
    const [date, setDate] = useState('');
    const [school, setSchool] = useState('');
    const [maxChildren, setMaxChildren] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ date, school, maxChildren });
    };

    return (
        <div>
            <h3>Filter Events</h3>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <select
                value={school}
                onChange={(e) => setSchool(e.target.value)}
            >
                <option value="">Select School</option>
                {schools.map((school, index) => (
                    <option key={index} value={school}>{school}</option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Max Children"
                value={maxChildren}
                onChange={(e) => setMaxChildren(e.target.value)}
                min="1"
            />
            <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
    );
};

export default Filter;
