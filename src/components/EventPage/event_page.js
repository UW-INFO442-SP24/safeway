import React, { useState } from 'react';
import './EventPage.css'; 
import Filter from './filter';

const EventPage = () => {
    const schools = ['SILVERDALE ELEMENTARY SCHOOL', 'WEST HILLS ELEMENTARY SCHOOL', 'UNION HILL ELEMENTARY SCHOOL', 'BEACON HILL ELEMENTARY SCHOOL'];

    const [events, setEvents] = useState(
        schools.flatMap(school => {
            let imagePath;
            switch (school) {
                case 'BEACON HILL ELEMENTARY SCHOOL':
                    imagePath = 'img/beaconhill.jpg';
                    break;
                case 'WEST HILLS ELEMENTARY SCHOOL':
                    imagePath = 'img/westhills.jpg';
                    break;
                case 'UNION HILL ELEMENTARY SCHOOL':
                    imagePath = 'img/unionhill.jpg';
                    break;
                case 'SILVERDALE ELEMENTARY SCHOOL':
                    imagePath = 'img/silverdale.jpg';
                    break;
                default:
                    imagePath = ''; // Set the default image path if school doesn't match any of the cases
            }

            return Array(5).fill().map((_, i) => ({
                title: `Event ${i + 1}`,
                date: `2024-04-0${i + 2}`,
                location: school,
                description: `Join us for event ${i + 1}. Meet at the park at 9:30am.`,
                attendees: 0,
                maxChildren: Math.floor(Math.random() * 9) + 2, 
                contactName: 'Jane Smith',
                phoneNumber: '987-654-3210',
                imagePath: imagePath // Add imagePath property
            }));
        })
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
        if (dateFilter && event.date !== dateFilter) return false;
        if (maxChildrenFilter && event.maxChildren >= parseInt(maxChildrenFilter)) return false;
        if (schoolFilter && schoolFilter !== '' && event.location !== schoolFilter) return false; // Check if schoolFilter is not empty before applying the filter
        return true;
    });

const handleJoinEvent = (index) => {
    // Create a copy of the events array to avoid mutating state directly
    const newEvents = [...events];

    // Increase attendance for the clicked event card in the newEvents array
    if (newEvents[index].attendees < newEvents[index].maxChildren) {
        newEvents[index].attendees += 1;
    }

    // Update the events state with the modified newEvents array
    setEvents(newEvents);
};
    
    return (
        <div className="eventpage-container">
            <h1>Come Join Your School District!</h1>
            
            <Filter onFilterChange={handleFilterChange} schools={schools} />

            <div id='event-flexbox'>
                {filteredEvents.map((event, index) => (
                    <div className="event-card" key={index}>
                        <h2 className="event-title">{event.title}</h2>
                        <div id="flex-div">
                            <img id="school-image" src={event.imagePath} alt={event.location} className="event-image" />
                            <div className="event-details-container">
                                <p className="event-details">Date: {event.date}</p>
                                <p className="event-details">Location: {event.location}</p>
                                <p className="event-details">Description: {event.description}</p>
                                <p className="event-details">Max Children: {event.maxChildren}</p>
                                <p className="event-details">Attendees: {event.attendees}/{event.maxChildren} spots filled</p>
                                <p className="event-details">Contact Name: {event.contactName}</p>
                                <p className="event-details">Phone Number: {event.phoneNumber}</p>
                            </div>
                        </div>
                        <button className="join-button" onClick={() => handleJoinEvent(index)}>Join Event</button>
                        {event.attendees >= event.maxChildren && <span className="status-full">Full</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;