import React, { useState } from 'react';

const EventBox = ({ events, filters, onSave }) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [maxChildren, setMaxChildren] = useState(1);

    const handleSave = () => {
        const eventDetails = { title, date, time, location, description, maxChildren };
        onSave(eventDetails);
    };

    return (
        <div className="event-box">
            <h3>Create Group Walk Event</h3>
            <input
                type="text"
                placeholder="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
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
            <textarea
                placeholder="Event Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="number"
                placeholder="Max Children"
                value={maxChildren}
                onChange={(e) => setMaxChildren(e.target.value)}
                min="1"
            />
            <button onClick={handleSave}>Save Event</button>
        </div>
    );
};

export default EventBox;







