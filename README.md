## Zadania w JavaScript

Hej,
przygotowałem dla Ciebie 4 zadania.

Na początek:
- sklonuj sobie repozytorium: `git clone git@github.com:szemek/playground.git`
- wejdź do katalogu: `cd playground`
- usuń dotychczasową historię gita: `rm -rf .git`
- zacznij historię gita na nowo: `git init; git add .; git commit -m "Initial commit"`
- otwórz cały projekt w Sublime Text

Projekt składa się z 4 katalogów z zadaniami i jednego katalogu `jasmine`, który zawiera bibliotekę do testów w JavaScript.

```
.
├── 01-add
├── 02-multiply
├── 03-sum-up
├── 04-even
└── jasmine
```

### Zadania

Każde zadanie ma następującą strukturę:
```
.
├── index.html
├── spec
│   └── main_spec.js
└── src
    └── main.js
```

Otwórz plik `index.html` w przeglądarce, aby uruchomić testy.

Na początku wszystkie testy nie przechodzą i są oznaczone na czerwono.

**Twoim zadaniem jest poprawić plik `src/main.js` tak, aby testy przeszły i zostały oznaczone na zielono.**

W pliku `spec/main_spec.js` znajdują się przypadki testowe, które sprawdzają kod zapisany w `src/main.js`.

#### 01-add

W pliku `src/main.js` jest funkcja `add`. Popraw ją, żeby testy przeszły.

#### 02-multiply

Napisz funkcję `multiply`, która zwróci wynik mnożenia dla podanych dwóch argumentów.

#### 03-sum

Napisz funkcję `sum`, która obliczy sumę liczb w tablicy. Dla pustej tablicy suma wynosi 0.

#### 04-even

Napisz funkcję `even`, która dla zadanego argumentu `n` zwróci tablicę z liczbami parzystymi (podzielnymi przez 2) mniejszymi bądź równymi `n`.



