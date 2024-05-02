import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [maxChildren, setMaxChildren] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ date, time, location, maxChildren });
    };

    return (
        <div>
            <h3>Search</h3>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
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
