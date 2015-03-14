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

