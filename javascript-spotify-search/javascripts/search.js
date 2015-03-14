$(document).ready(function() {
  $('#submit').on('click', function(){
    var query = $('#search').val();

    var params = $.param({
      q: query,
      type: 'artist'
    });

    $.get('https://api.spotify.com/v1/search?' + params, function(data) {
      var artist = data.artists.items[0];

      var source = $('#artist-template').html();
      var template = Handlebars.compile(source);
      var context = {
        name: artist.name,
        image_url: artist.images[1].url
      };
      var html = template(context);

      $('#content').html(html);
    });
  });
});
