class App extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.searchYouTube.length > 0 ? this.props.searchYouTube[0] : {}} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.searchYouTube.length > 0 ? this.props.searchYouTube : []}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
