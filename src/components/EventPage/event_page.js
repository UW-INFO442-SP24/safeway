import React, { useState } from 'react';
import './EventPage.css'; 
import Filter from './filter';


const EventPage = () => {
    const schools = ['SILVERDALE ELEMENTARY SCHOOL', 'WEST HILLS ELEMENTARY SCHOOL', 'UNION HILLS ELEMENTARY SCHOOL', 'BEACON HILLS ELEMENTARY SCHOOL'];
    const [events, setEvents] = useState(
        schools.flatMap(school => Array(5).fill().map((_, i) => ({
            title: `Event ${i + 1}`,
            date: `2024-04-0${i + 2}`,
            location: school,
            description: `Join us for event ${i + 1}. Meet at the park at 9:30am.`,
            attendees: 0,
            maxChildren: Math.floor(Math.random() * 9) + 2, 
            contactName: 'Jane Smith',
            phoneNumber: '987-654-3210'
        })))
    );


    const [dateFilter, setDateFilter] = useState('');
    const [schoolFilter, setSchoolFilter] = useState('');
    const [maxChildrenFilter, setMaxChildrenFilter] = useState('');


    const handleFilterChange = (filterParams) => {
        setDateFilter(filterParams.date);
        setSchoolFilter(filterParams.school);
        setMaxChildrenFilter(filterParams.maxChildren);
    };


    const filteredEvents = events.filter(event => {
        if (dateFilter && new Date(event.date) !== new Date(dateFilter)) return false;
        if (schoolFilter && event.location !== schoolFilter) return false;
        if (maxChildrenFilter && event.maxChildren >= parseInt(maxChildrenFilter)) return false;
        return true;
    });
    

    const handleJoinEvent = (index) => {
        const newEvents = [...events];
        if (newEvents[index].attendees < newEvents[index].maxChildren) {
            newEvents[index].attendees += 1;
        }
        setEvents(newEvents);
    };

    return (
        <div className="eventpage-container">
            <h1>Come Join Your School District!</h1>
    

            <Filter onFilterChange={handleFilterChange} schools={schools} />


            {filteredEvents.map((event, index) => (
                <div className="event-card" key={index}>
                    <h2 className="event-title">{event.title}</h2>
                    <p className="event-details">Date: {event.date}</p>
                    <p className="event-details">Location: {event.location}</p>
                    <p className="event-details">Description: {event.description}</p>
                    <p className="event-details">Max Children: {event.maxChildren}</p>
                    <p className="event-details">Attendees: {event.attendees}/{event.maxChildren} spots filled</p>
                    <p className="event-details">Contact Name: {event.contactName}</p>
                    <p className="event-details">Phone Number: {event.phoneNumber}</p>
                    <button className="join-button" onClick={() => handleJoinEvent(index)}>Join Event</button>
                    {event.attendees >= event.maxChildren && <span className="status-full">Full</span>}
                </div>
            ))}
        </div>
    );
};

export default EventPage;
