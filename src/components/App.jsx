import VideoList from "./VideoList.js";
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from "./VideoPlayer.js";
// import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      searchStr: "dog"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.makeSearchRequest = this.makeSearchRequest.bind(this);
  }

  handleClick(selected) {
    this.setState({
      currentVideo: selected,
    });
  }

  handleSearchInput(inputStr) {
    console.log('inputStr', inputStr);
    this.setState({
      searchStr: inputStr,
    });

  }

  makeSearchRequest(inputStr) {
    console.log('MakeSearchRequest of ', inputStr)
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      query: inputStr,
      max: 5
    }, (videoList) => {
      console.log('INIT');
      this.setState({
        currentVideo: videoList[0],
        videos: videoList
      });
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchStr={this.state.searchStr} onKeyPress={this.handleSearchInput} makeSearchRequest={this.makeSearchRequest} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.handleClick} videos={this.state.videos} />
        </div>
      </div>
    </div>);
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'dogs',
      max: 5
    }, (videoList) => {
      console.log('INIT');
      this.setState({
        currentVideo: videoList[0],
        videos: videoList
      });
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


//