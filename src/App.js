//Vicky
// import React from 'react';
// import Resource from './components/Resource/resource'; 

// function App() {
//   return (
//     <div className="App">
//       <Resource /> 
//     </div>
//   );
// }

// export default App;

//Steven
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/homepage';
import EventPage from './components/EventPage/event_page';
import Resource from './components/Resource/resource'; 

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create-event">Create Event</Link></li>
                        <li><Link to="/resources">Resource</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create-event" element={<EventPage />} />
                    <Route path="/resources" element={<Resource />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;