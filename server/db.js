const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// tworzymy plik bazy w folderze server
const dbPath = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Błąd połączenia z bazą:", err.message);
  } else {
    console.log("Połączono z bazą SQLite");
  }
});

// Tworzymy tabele jeśli nie istnieją
db.serialize(() => {
  // Tabela użytkowników
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT
    )
  `);

  // Tabela zamówień
  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      diet_type TEXT NOT NULL,
      days INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
});

module.exports = db;