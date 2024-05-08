import React from 'react';
import './EventPage.css';

const EventPage = () => {
    const events = [
        {
            title: 'Group Walk to school',
            date: '2024-04-02',
            location: 'Westlake Elementary School',
            description: 'Join us for a group walk to school. Meet at the park at 9:30am.'
        },
        {
            title: 'Group Walk to school',
            date: '2024-04-03',
            location: 'Westlake Elementary School',
            description: 'Join us for a group walk to school. Meet at the park at 8:30am.'
        }
    ];

    const handleJoinEvent = (event) => {
        console.log(`Joining event: ${event.title}`);
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
                    <button className="join-button" onClick={() => handleJoinEvent(event)}>Join Event</button>
                </div>
            ))}
        </div>
    );
};

export default EventPage;