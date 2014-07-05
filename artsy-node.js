var request = require('request'),
    Q = require('q');

var apiEndpoint = 'https://artsyapi.com/api/v1/';

function get(first, last) {
  var deferred = Q.defer();

  // var uri = apiEndpoint + 'artist' + '/' + first + '-' + last;

  var options = {
    method: 'GET',
    uri: apiEndpoint + 'artist' + '/' + first + '-' + last, // this.type is cards or bank_accounts
    // auth: client.auth,
    json: true,
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      console.log(body);
      deferred.resolve(body);

    } else {
      console.log(body);
      deferred.reject(body);
    }
  });
  return deferred.promise;
}

var client = {};

client.configure = function(username, password) {
  client.auth = {
    'user': username,
    'pass': password,
    'sendImmediately': false
  };
};

client.artist = {
  findByName: function(first, last) {
    get(first, last);
  }
};
  // this.artworks: {};
// };



// Client.prototype.

module.exports = client;

// artist/andy-warhol/artworks


// https://artsyapi.com/api/v1/artists/sample
// https://artsyapi.com/api/v1/artists
// https://twitter.com/angiepanfil/status/319130828259090433

// https://artsyapi.com/api/v1/artist/georges-seurat
// https://artsyapi.com/api/v1/artwork/andy-warhol-flowers-f-and-s-ii-dot-68
// https://artsyapi.com/api/v1/artist/andy-warhol/artworks

// [{"_id":"4d8b925d4eb68a1b2c000012","id":"georges-seurat","sortable_id":"seurat-georges","name":"Georges Seurat","years":"1859-1891","public":true,"birthday":"1859","nationality":"French","published_artworks_count":15,"forsale_artworks_count":0,"artworks_count":16,"image_url":"http://static0.artsy.net/artist_images/52f6bde14a04f5d504f6a2c5/3/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":4175,"original_width":4466},{"_id":"4d8b92624eb68a1b2c000066","id":"michelangelo-merisi-da-caravaggio","sortable_id":"caravaggio-michelangelo-merisi-da","name":"Michelangelo Merisi da Caravaggio","years":"1571-1610","public":true,"birthday":"1571","nationality":"Italian","published_artworks_count":4,"forsale_artworks_count":0,"artworks_count":4,"image_url":"http://static1.artsy.net/artist_images/52f6bdde4a04f5d504f69e42/1/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":3800,"original_width":3294},{"_id":"4d8b92624eb68a1b2c00006c","id":"paul-cezanne","sortable_id":"cezanne-paul","name":"Paul CÃ©zanne","years":"1839-1906","public":true,"birthday":"1839","nationality":"French","published_artworks_count":143,"forsale_artworks_count":0,"artworks_count":154,"image_url":"http://static3.artsy.net/artist_images/52f6bddd4a04f5d504f69bd8/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":null,"original_width":null},{"_id":"4d8b92634eb68a1b2c000072","id":"jeanne-duval","sortable_id":"duval-jeanne","name":"Jeanne Duval","years":"born 1956","public":true,"birthday":"1956","nationality":"American","published_artworks_count":0,"forsale_artworks_count":0,"artworks_count":4,"image_url":"http://static0.artsy.net/artist_images/52f6bde44a04f5d504f6a3ce/1/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":null,"original_width":null},{"_id":"4d8b92644eb68a1b2c00007e","id":"charles-garabedian","sortable_id":"garabedian-charles","name":"Charles Garabedian","years":"born 1923","public":true,"birthday":"1923","nationality":"American","published_artworks_count":5,"forsale_artworks_count":5,"artworks_count":19,"image_url":"http://static2.artsy.net/artist_images/52f6bde54a04f5d504f6a5d1/3/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":null,"original_width":null},{"_id":"4d8b92684eb68a1b2c00009e","id":"leonardo-da-vinci","sortable_id":"da-vinci-leonardo","name":"Leonardo da Vinci","years":"1452-1519","public":true,"birthday":"1452","nationality":"Italian","published_artworks_count":11,"forsale_artworks_count":0,"artworks_count":15,"image_url":"http://static3.artsy.net/artist_images/52f6bde14a04f5d504f6a2c7/3/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":2955,"original_width":3916},{"_id":"4d8b92694eb68a1b2c0000ac","id":"kasimir-severinovich-malevich","sortable_id":"malevich-kasimir-severinovich","name":"Kasimir Severinovich Malevich","years":"1879-1935","public":true,"birthday":"1879","nationality":"Russian","published_artworks_count":12,"forsale_artworks_count":4,"artworks_count":22,"image_url":"http://static2.artsy.net/artist_images/52f6bde44a04f5d504f6a44c/1/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":null,"original_width":null},{"_id":"4d8b926a4eb68a1b2c0000ae","id":"damien-hirst","sortable_id":"hirst-damien","name":"Damien Hirst","years":"born 1965","public":true,"birthday":"1965","nationality":"British","published_artworks_count":241,"forsale_artworks_count":131,"artworks_count":399,"image_url":"http://static3.artsy.net/artist_images/52f6bde14a04f5d504f6a2c6/1/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":null,"original_width":null},{"_id":"4d8b926a4eb68a1b2c0000b6","id":"nancy-graves","sortable_id":"graves-nancy","name":"Nancy Graves","years":"December 23, 1939 - October 21, 1995","public":true,"birthday":"December 23, 1939","nationality":"American","published_artworks_count":13,"forsale_artworks_count":7,"artworks_count":28,"image_url":"http://static0.artsy.net/artist_images/5318ebcc6a21db30cd00005f/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":1308,"original_width":1440},{"_id":"4d8b926c4eb68a1b2c0000be","id":"enrico-castellani","sortable_id":"castellani-enrico","name":"Enrico Castellani","years":"born 1930","public":true,"birthday":"1930","nationality":"Italian","published_artworks_count":21,"forsale_artworks_count":19,"artworks_count":79,"image_url":"http://static2.artsy.net/artist_images/52f6bde44a04f5d504f6a3db/1/:version.jpg","image_versions":["square","tall","large","four_thirds"],"original_height":null,"original_width":null}]
