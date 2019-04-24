import VideoListEntry from './VideoListEntry.js';

var VideoList = ({ videos, onClick }) => (
  <div className="video-list">
    {videos.map((video, index) => (
      <VideoListEntry video={video} onClick={onClick} key={index} />
    ))}
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

{/* <VideoListEntry vtitle={video.snippet.title} vdescript={video.snippet.description} vthumb = {video.snippet.thumbnails.default.url}/> */ }

//      <VideoListEntry vtitle={video.snippet.title} vdescript={video.snippet.description} vthumb = {video.snippet.thumbnails.default.url}/>
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
