# 1. Struktura katalogu

Stwórz katalog `javascript-spotify-search` z następującą strukturą:

```
javascript-spotify-search/
├── images/
├── index.html
├── javascripts/
│   └── search.js
└── stylesheets/
    └── style.css
```

Pobierz **handlebars-v3.0.0.js** ze strony [http://handlebarsjs.com/](http://handlebarsjs.com/) i zapisz w katalogu `javascripts`.

Pobierz **jquery-1.11.2.min.js** ze strony [http://jquery.com/](http://jquery.com/) i zapisz w katalogu `javascripts`.

## 2. HTML

W pliku `index.html` stwórzmy szkielet strony HTML. Dodajmy pole tekstowe i przycisk **Szukaj**.

    <!DOCTYPE html>
    <html>
    <head>
      <title>JavaScript Spotify Search</title>
      <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
    </head>
    <body>

      <header>
        <input type='text' name='search' id='search'>
        <input type='submit' name='submit' id='submit' value='Szukaj'>
      </header>

      <div id='content'>
      </div>

    </body>
    </html>

## 3. JavaScript

Załączmy skrypty do naszej strony:

    <script type="text/javascript" src="javascripts/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="javascripts/handlebars-v3.0.0.js"></script>
    <script type="text/javascript" src="javascripts/search.js"></script>

## 4. Handlebars

Dodajmy szablon do pliku `index.html`:

    <script id="artist-template" type="text/x-handlebars-template">
      <div class="artist">
        <h1>{{name}}</h1>
        <img src="{{image_url}}">
      </div>
    </script>

## 5. Wyszukiwarka artysty

W tym kroku przyda się nam dokumentacja do [Spotify API](https://developer.spotify.com/web-api/endpoint-reference/).

W pliku `search.js` dodajmy następujący kod:

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
