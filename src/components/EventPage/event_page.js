import React, { useState } from 'react';
import './EventPage.css'; // Import the CSS file

const EventPage = () => {
    const schools = ['SlIVERDALE ELEMENTRY SCHOOL', 'WEST HILLS ELEMENTRY SCHOOL', 'UNION HILLS ELEMENTRY SCHOOL', 'BEACON HILLS ELEMENTRY SCHOOL'];
    const [events, setEvents] = useState(
        schools.flatMap(school => Array(5).fill().map((_, i) => ({
            title: `Event ${i + 1}`,
            date: `2024-04-0${i + 2}`,
            location: school,
            description: `Join us for event ${i + 1}. Meet at the park at 9:30am.`,
            attendees: 0,
            contactName: 'Jane Smith',
            phoneNumber: '987-654-3210'
        })))
    );

    const handleJoinEvent = (index) => {
        const newEvents = [...events];
        if (newEvents[index].attendees < 10) {
            newEvents[index].attendees += 1;
        }
        setEvents(newEvents);
    };

    return (
        <div>
            <h1>Event Page</h1>
            {events.map((event, index) => (
                <div className="event-card" key={index}>
                    <h2 className="event-title">{event.title}</h2>
                    <p className="event-details">Date: {event.date}</p>
                    <p className="event-details">Location: {event.location}</p>
                    <p className="event-details">Description: {event.description}</p>
                    <p className="event-details">Attendees: {event.attendees}</p>
                    <p className="event-details">Contact Name: {event.contactName}</p>
                    <p className="event-details">Phone Number: {event.phoneNumber}</p>
                    <button className="join-button" onClick={() => handleJoinEvent(index)}>Join Event</button>
                    {event.attendees >= 10 && <span className="status-full">Full</span>}
                </div>
            ))}
        </div>
    );
};

export default EventPage;