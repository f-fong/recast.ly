class App extends React.Component { 
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {
      videoResults: []
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={!this.state ? (this.props.searchYouTube.length > 0 ? this.props.searchYouTube[0] : {}) : this.state.videoResults[0]} />
        </div>
        <div className="col-md-5">
          <VideoList videos={!this.state ? (this.props.searchYouTube.length > 0 ? this.props.searchYouTube : []) : this.state.videoResults}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.options) {
      searchYouTube(this.props.options, (data) => {
        this.setState({
          videoResults: data
        });
      });
    }  
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
