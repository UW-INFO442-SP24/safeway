import React, { useState } from 'react';

function HomePage() {
  // State variables to track whether each school card is enlarged or not
  const [isSilverdaleEnlarged, setIsSilverdaleEnlarged] = useState(false);
  const [isBeaconHillEnlarged, setIsBeaconHillEnlarged] = useState(false);
  const [isWestHillsEnlarged, setIsWestHillsEnlarged] = useState(false);
  const [isUnionHillEnlarged, setIsUnionHillEnlarged] = useState(false);

  // Function to toggle the enlarged state of each card
  const toggleEnlarged = (school) => {
    switch (school) {
      case 'Silverdale':
        setIsSilverdaleEnlarged(!isSilverdaleEnlarged);
        break;
      case 'Beacon Hill':
        setIsBeaconHillEnlarged(!isBeaconHillEnlarged);
        break;
      case 'West Hills':
        setIsWestHillsEnlarged(!isWestHillsEnlarged);
        break;
      case 'Union Hill':
        setIsUnionHillEnlarged(!isUnionHillEnlarged);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <main>
        <section className="main1">
          <h1 className="title">SafeWay</h1>
          <p>Give your kids a safe way home🚶🩵</p>
        </section>

        <section className="services-section hidden animate__animated">
          <h2>Our Schools</h2>
          <div className="services-container">
            <div className={`service-item ${isSilverdaleEnlarged ? 'enlarged' : ''}`} onClick={() => toggleEnlarged('Silverdale')}>
              <img src="img/silverdale.jpg" alt="Silverdale Elementary School" width="300" height="300" />
              <h3>Silverdale Elementary School</h3>
            </div>
            <div className={`service-item ${isBeaconHillEnlarged ? 'enlarged' : ''}`} onClick={() => toggleEnlarged('Beacon Hill')}>
              <img src="img/beaconhill.jpg" alt="Beacon Hill Elementary School" width="300" height="300" />
              <h3>Beacon Hill Elementary School</h3>
            </div>
            <div className={`service-item ${isWestHillsEnlarged ? 'enlarged' : ''}`} onClick={() => toggleEnlarged('West Hills')}>
              <img src="img/westhills.jpg" alt="West Hills Elementary School" width="300" height="300" />
              <h3>West Hills Elementary School</h3>
            </div>
            <div className={`service-item ${isUnionHillEnlarged ? 'enlarged' : ''}`} onClick={() => toggleEnlarged('Union Hill')}>
              <img src="img/unionhill.jpg" alt="Union Hill Elementary School" width="300" height="300" />
              <h3>Union Hill Elementary School</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
