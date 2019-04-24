var searchYouTube = (options, callback) => {
  $.ajax({
    cache: false,
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      pageToken: $("#pageToken").val(),
      type: 'video',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    type: 'GET',
    timeout: 2000,
    success: function (data) {
      callback(data.items);
    },
    url: 'https://www.googleapis.com/youtube/v3/search'
  });
};

export default searchYouTube;
