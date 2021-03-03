import VideoItem from './VideoItem';

const VideoList = ({ data }) => {
  const renderedVideos = data.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });
  return renderedVideos;
};

export default VideoList;
