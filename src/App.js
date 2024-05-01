import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage'; // Adjusted path for HomePage
import EventPage from './components/EventPage/event_page'; // Adjusted path for EventPage
import ResourcePage from './components/ResourcePage/resource'; // Adjusted path for ResourcePage

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create-event">Create Event</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create-event" element={<EventPage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
