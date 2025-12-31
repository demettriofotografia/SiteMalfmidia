import React from 'react';

interface VideoSectionProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ title, subtitle, videoSrc }) => (
  <section style={{ padding: '50px 20px', textAlign: 'center' }}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    {videoSrc && (
      <video controls style={{ maxWidth: '100%', marginTop: '20px' }}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    )}
  </section>
);

export default VideoSection;
