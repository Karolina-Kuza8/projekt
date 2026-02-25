## FitFood Box

Strona internetowa dla firmy oferującej zdrowe diety pudełkowe z dowozem.
Projekt łączy frontend (HTML, CSS, JavaScript) z backendem (Node.js, Express, SQLite), umożliwiając użytkownikom kontakt poprzez formularz oraz zapis danych w bazie.

## O projekcie
FitFood Box to nowoczesna, responsywna strona internetowa prezentująca ofertę cateringu dietetycznego.

Użytkownicy mogą:
-----------------
zapoznać się z ofertą i cennikiem,
dowiedzieć się więcej o firmie,
wysłać wiadomość przez formularz kontaktowy,
a dane trafiają bezpośrednio do bazy SQLite.
Projekt został zaprojektowany jako pełna aplikacja webowa typu Full-Stack.

## Technologie
### Frontend
HTML5
CSS3 (Flexbox, Grid, responsywność)
JavaScript (Fetch API)
### Backend
Node.js
Express.js
SQLite

## Jak uruchomić projekt
### Przejdź do folderu backendu:
cd fitfood-app
### Zainstaluj zależności:
npm install
### Uruchom serwer:
node server.js
### Otwórz przeglądarkę i wejdź na:
http://localhost:3000

## Formularz kontaktowy
Formularz na stronie O nas / Kontakt:
-------------------------------------
wysyła dane metodą POST do /api/messages
backend zapisuje dane w bazie database.sqlite
obsługiwane są błędy i walidacja pól
Przykładowe dane wysyłane do API:

{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "message": "Chciałbym dowiedzieć się więcej o diecie sportowej."
}

## API

Dostępne endpointy:
GET /api/messages – pobranie wszystkich wiadomości
POST /api/messages – dodanie nowej wiadomości
PUT /api/messages/:id – edycja wiadomości
DELETE /api/messages/:id – usunięcie wiadomości

## Funkcjonalności strony

Responsywny layout (działa na telefonach i komputerach)
Nowoczesny design
Nawigacja mobilna (menu hamburger)
Dynamiczne aktualizowanie roku w stopce
Integracja z Google Maps
Pełna komunikacja frontend ↔ backend

## Baza danych
Projekt wykorzystuje SQLite, a plik bazy database.sqlite tworzony jest automatycznie przy pierwszym uruchomieniu serwera. Połączenie realizowane jest za pomocą biblioteki sqlite3, a ścieżka do pliku ustawiana dynamicznie przy użyciu modułu path.

Aplikacja zawiera dwie tabele: users (przechowującą dane użytkowników) oraz orders (przechowującą zamówienia diet). Między tabelami występuje relacja jeden-do-wielu — jeden użytkownik może posiadać wiele zamówień, a kolumna user_id w tabeli orders jest kluczem obcym wskazującym na users.id.

Struktura tabel tworzona jest automatycznie przy starcie aplikacji dzięki poleceniu CREATE TABLE IF NOT EXISTS, dlatego projekt nie wymaga ręcznej konfiguracji bazy danych.

## Podsumowanie
Projekt wykonany jako aplikacja webowa Full-Stack
FitFood Box 2026