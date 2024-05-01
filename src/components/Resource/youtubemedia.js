import React from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbed = ({ link }) => {
  // Extract video ID from the link
  const videoId = link.split('/').pop().split('?').shift();

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YouTubeEmbed.propTypes = {
  link: PropTypes.string.isRequired
};

export default YouTubeEmbed;
