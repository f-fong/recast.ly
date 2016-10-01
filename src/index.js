var options = {
  key: window.YOUTUBE_API_KEY,
  query: 'reactjs',
  max: 5
};

// var youTubeData = searchYouTube(options, (data) => {
//   ReactDOM.render(<App searchYouTube={data} options={options} />, document.getElementById('app'));
// });

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));