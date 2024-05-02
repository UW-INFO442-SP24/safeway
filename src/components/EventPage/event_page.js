import React, { useState } from 'react';
import EventBox from './EventBox';
import Filter from './filter';

const EventPage = () => {
    const [filters, setFilters] = useState({});

    const handleSaveEvent = (eventDetails) => {
        console.log('Event Created:', eventDetails);
    };

    return (
        <div>
            <h1>Create Event</h1>
            <Filter onFilterChange={setFilters} />
            <EventBox filters={filters} onSave={handleSaveEvent} />
        </div>
    );
};

export default EventPage;
