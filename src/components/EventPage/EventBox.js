import React, { useState } from 'react';

const EventBox = ({ events }) => {
    const [attendees, setAttendees] = useState(Array(events.length).fill(0));

    const handleJoinEvent = (index) => {
        if (attendees[index] < events[index].maxChildren) {
            const newAttendees = [...attendees];
            newAttendees[index] += 1;
            setAttendees(newAttendees);
        }
    };

    return (
        <div className="event-box">
            <h3>Upcoming Events</h3>
            {events.map((event, index) => (
                <div className="event-card" key={index}>
                    <h2 className="event-title">{event.title}</h2>
                    <p className="event-details">Date: {event.date}</p>
                    <p className="event-details">Location: {event.location}</p>
                    <p className="event-details">Description: {event.description}</p>
                    <p className="event-details">Max Number of Attendees: {event.maxChildren}</p>
                    <p className="event-details">Attendees: {attendees[index]}/{event.maxChildren} spots filled</p>
                    <button className="join-button" onClick={() => handleJoinEvent(index)}>Join Event</button>
                    {attendees[index] >= event.maxChildren && <span className="status-full">Full</span>}
                </div>
            ))}
        </div>
    );
};

export default EventBox;
