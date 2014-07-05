var request = require('request'),
    Q = require('q');

var apiEndpoint = 'https://artsyapi.com/api/v1/';

function get(first, last, type) { // type refers to keys of uri object: artist/artworks/search
  var deferred = Q.defer();
  var j = request.jar();
  var uri = {
    artist: apiEndpoint + 'artist' + '/' + first + '-' + last,
    artworks: apiEndpoint + 'artist' + '/' + first + '-' + last + '/' + 'artworks'
    // search: apiEndpoint // more to come!
  };

  var cookie = request.cookie(client.auth.cookieString);
  j.setCookie(cookie, uri);

  var options = {
    method: 'POST',
    jar: j,
    uri: uri[type],
    json: true,
    headers: {
      'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36",
      'Cookie': cookie
    }
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      deferred.resolve(body);

    } else {
      deferred.reject(body);
    }
  });
  return deferred.promise;
}

var client = {};

client.configure = function(cookieString) {
  client.auth = {
    cookieString: "_gravity_session=" + cookieString
  };
};

client.artist = {
  findByName: function(first, last) {
    return get(first, last, 'artist');
  }
};

client.artworks = {
  findByArtist: function(first, last) {
    return get(first, last, 'artworks');
  }
};

module.exports = client;
