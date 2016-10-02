var options = {
  key: window.YOUTUBE_API_KEY,
  query: 'reactjs',
  max: 5
};

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));