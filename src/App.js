import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage';
import EventPage from './components/EventPage/event_page';
import LandingPage from './components/LandingPage/LandingPage';
import ResourcePage from './components/ResourcePage/ResourcePage';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create-event">Create Event</Link></li>
                        <li><Link to="/landing">Landing</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create-event" element={<EventPage />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
