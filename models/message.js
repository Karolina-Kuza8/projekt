const db = require("../server/db");

// Pobierz wszystkie wiadomości
exports.getAllMessages = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM messages ORDER BY created_at DESC", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

// Dodaj wiadomość
exports.createMessage = (name, email, message) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO messages (name, email, message)
      VALUES (?, ?, ?)
    `;
    db.run(sql, [name, email, message], function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID });
    });
  });
};

// Usuń wiadomość
exports.deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM messages WHERE id = ?", [id], function (err) {
      if (err) reject(err);
      else resolve({ changes: this.changes });
    });
  });
};