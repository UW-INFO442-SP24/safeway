import React from 'react';

function Card({ imagePath, title, explanation }) {
  return (
    <div className="col-sm-12 col-md-6 col-xl-3 d-flex">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img className="col-sm-auto col-xl-12" src={imagePath} alt={title} />
            </div>
            <div className="col-sm">
              <h2 className="card-title col-sm">{title}</h2>
              <p className="card-explanation">{explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
