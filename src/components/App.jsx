class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videoResults: [],
      currentVideo: null,
      searchKeyword: 'reactjs'
    };
  }

  handleOnSearchKeywordChanged(searchKeyword) {
    this.state.searchKeyword = searchKeyword.target.value;
    this.setState({
      searchKeyword: this.state.searchKeyword
    });

    this.requestData();
  }

  handleOnSearchAction(event) {
    window.options.query = this.state.searchKeyword;
    this.requestData();
  }

  handleOnSetCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  requestData() {
    this.props.searchYouTube(window.options, (data) => {
      this.setState({
        videoResults: data
      });
    });
  }

  render() {
    return (
      <div>
        <Nav handleOnChange={this.handleOnSearchKeywordChanged.bind(this)} 
             handleOnClick={this.handleOnSearchAction.bind(this)} />
        <div className="col-md-7">
          <div className="col-md-7">
          <VideoPlayer video={ this.state.currentVideo ? this.state.currentVideo : this.state.videoResults ? 
                              (this.state.videoResults.length > 0 ? this.state.videoResults[0] : {}) 
                              : {} } />
        </div>
        </div>
        <div className="col-md-5">
          <div className="col-md-5">
          <VideoList videos={ this.state.videoResults ? 
                              (this.state.videoResults.length > 0 ? this.state.videoResults : []) 
                              : [] } handleOnClick={this.handleOnSetCurrentVideo.bind(this)} />
        </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.requestData();
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
