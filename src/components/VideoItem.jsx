const VideoItem = ({ video }) => {
  if (!video) {
    return <p>Loading...</p>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe src={videoSrc} allowFullScreen title='Video player' />
      </div>

      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
