var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId : '6b167a0bd8c143cb9984fa79cea4b475',
    clientSecret : '937f1afeb7b946b595c57d4130c9c0e3'
});
spotifyApi.setAccessToken('BQBnTlO1dCj6LdycWYnxBZr589JR3-CMu79zIlOhL-L1xW-V3K9AkMZOxOitmehKOEWf3cjpeAvjQfHIo2b9x_0KxlwREQ9W9K8ztCqDsgxYuT8kGtD92YhOjdj9vw69FDDBoKpROLLqU8eByYgkQX5v3VKUK-QbuIpyOF4wQxjC9rlCOzYVlfzkEivstq6wQ974wIqfDe2mc8GsPF0KlGE');
spotifyApi.getMyCurrentPlayingTrack().then(console.log)