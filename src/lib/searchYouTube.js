var searchYouTube = (options, callback) => {

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?key=' + options.key + '&q=' + options.query + '&maxResults=' + options.max + '&part=snippet&videoEmbeddable=true&type=video',
    success: (data) => {
      callback(data.items);
    },
    error: (exception) => {
      console.error('Error', exception);
    }
  });
};

window.searchYouTube = searchYouTube;
