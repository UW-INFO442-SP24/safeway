import React from 'react';
import YouTubeEmbed from './youtubemedia';
import Card from './card'; 

//include our media: the youtube video
function Resource() {
  const youtubeLink = "https://youtu.be/BWR3DxGHLD4?si=Aa-uwtdtycl51zzA";

  const cardData = [
    { imagePath: "/img/community.png", title: "Community", explanation: "Join local walking groups and events to connect with neighbors and build a sense of community." },
    { imagePath: "/img/safety.png", title: "Safety", explanation: "Explore safe routes and learn pedestrian safety tips for enjoyable and worry-free walks." },
    { imagePath: "/img/sustainability.png", title: "Sustainability", explanation: "Discover eco-friendly walking trails and initiatives that promote a greener environment for future generations." }
  ];

//some random reviews for our app
  const ratings = [
    { name: 'Iced Coffee', rating: 5, comment: 'Great app, very easy to use! Recommend to all parents!' },
    { name: 'Jane Mastermind', rating: 5, comment: 'Excellent dashboard, I can easily find a group walk event for my kids!' },
    { name: 'Father of Three', rating: 3, comment: 'Good but needs some more improvement on the UI.' },
  ];

  return (
    <div className="resources-page">
      {/* Embed the YouTube video */}
      <div className="video-container">
        <YouTubeEmbed link={youtubeLink} />
      </div>

      {/* Apartment Cards */}
      <div className="safeway-mission">
        <h1>SafeWay is founded upon Community, Safety, and Sustainability</h1>
      </div>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <Card key={index} imagePath={card.imagePath} title={card.title} explanation={card.explanation} />
          ))}
        </div>
      </div>

      {/* Ratings Section */}
      <div className="ratings-section">
        <h2>Ratings & Reviews</h2>
        <div className="rating-container">
          {ratings.map((rating, index) => (
            <div key={index} className="rating-card">
              <div><strong>{rating.name}</strong> rated this app {rating.rating} stars:</div>
              <div className="rating-stars">{'★'.repeat(rating.rating)}</div>
              <div className="rating-comment">{rating.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resource;
