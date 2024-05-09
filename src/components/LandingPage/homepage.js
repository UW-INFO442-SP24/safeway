import React from 'react';

function HomePage() {
  return (
    <div>

      <main>
        <section className="main1">
          <h1 className="title">SafeWay</h1>
          <p>Give your kids a safe way home.  </p>
        </section>

        <section className="services-section hidden animate__animated">
          <h2>Our  Schools </h2>
          <div className="services-container">
            <div className="service-item">
              <img src="img/silverdale.jpg" alt="SliverDale Elmentary School" width="300" height="300" />
              <h3>SliverDale Elmentary School</h3>
            </div>
            <div className="service-item">
              <img src="img/beaconhill.jpg" alt="Beacon Hill Elmentary School" width="300" height="300" />
              <h3>Beacon Hill Elmentary School</h3>
            </div>
            <div className="service-item">
              <img src="img/westhills.jpg" alt="West Hills Elmentary School" width="300" height="300" />
              <h3>West Hills Elmentary School</h3>
            </div>
            <div className="service-item">
              <img src="img/unionhill.jpg" alt="Union Hill Elmentary School" width="300" height="300" />
              <h3>Union Hill Elmentary School</h3>
            </div>
          </div>
        </section>
      

      </main>
    </div>
  );
}

export default HomePage;
