import React from 'react';
import EventBox from './EventBox';

const EventPage = () => {
    const handleSaveEvent = (eventDetails) => {
        // Handle the event details here, e.g., saving them to a database or local state
        console.log('Event Created:', eventDetails);
    };

    return (
        <div>
            <h1>Create Event</h1>
            <EventBox onSave={handleSaveEvent} />
        </div>
    );
};

export default EventPage;
