class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videoResults: []
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <div className="col-md-7">
          <VideoPlayer video={ this.state.videoResults ? 
                              (this.state.videoResults.length > 0 ? this.state.videoResults[0] : {}) 
                              : {} } />
        </div>
        </div>
        <div className="col-md-5">
          <div className="col-md-5">
          <VideoList videos={ this.state.videoResults ? 
                              (this.state.videoResults.length > 0 ? this.state.videoResults : []) 
                              : [] } />
        </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.searchYouTube(window.options, (data) => {
      this.setState({
        videoResults: data
      });
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
