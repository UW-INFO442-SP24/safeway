import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components/HeaderFooter/headerfooter';
import HomePage from './components/LandingPage/homepage';
import EventPage from './components/EventPage/event_page';
import Resource from './components/Resource/resource'; 

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create-event" element={<EventPage />} />
                    <Route path="/resources" element={<Resource />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;