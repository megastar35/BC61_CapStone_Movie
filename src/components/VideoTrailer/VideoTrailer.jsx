import React, { useEffect, useState } from 'react';
import { getYouTubeVideoId } from '../../utils/utils';
const VideoTrailer = ({ trailer }) => {
  const [videoId, setVideoId] = useState(null);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => {
    if (trailer) {
      const id = getYouTubeVideoId(trailer);
      setVideoId(id);
    }
  }, [trailer]);

  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
