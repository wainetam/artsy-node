# Node client for Artsy API

## Setup -- No API key necessary!
  Add file in root directory of project folder and reference the filename. If not in root directory, adjust accordingly.
  ```
  var artsyClient = require('./artsy-node');
  ```

  Login to www.artsyapi.com with your Artsy.net credentials. Check your browser headers, and look in cookies to find the string associated with '_gravity_session'. Basically, take everything after '_gravity_session=' and config your client. Note that the _gravity_session_string_ needs to be from the cookie associated with logging into www.artsyapi.com, not artsy.net.
  ```
  artsyClient.configure(_gravity_session_string_);
  ```
## Basic Usage
  I've only implemented very basic API functionality, but will add more:

  To find basic artist info:
  ```
  artsyClient.artist.findByName(first, last).then(function(data) { // first and last name are lowercase
    console.log(data); // display data
  }, function(err) {
    console.log(err); // if error
  });
  ```

  To find artworks of an artist:
  ```
  artsyClient.artworks.findByArtist(first, last).then(function(data) { // first and last name are lowercase
    console.log(data); // display data
  }, function(err) {
    console.log(err); // if error
  });
  ```
## Examples

  Find some info on Mr. Mondrian:
  ```
  artsyClient.artist.findByName('piet', 'mondrian').then(function(data) {
    console.log(data);
  }, function(err) {
  console.log(err);
  });
  ```

## Credits

  - [Waine Tam](http://github.com/wainetam)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2014
