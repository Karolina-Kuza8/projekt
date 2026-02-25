// server.js
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Statyczne pliki =====
// public jest obok fitfood-app
app.use(express.static(path.join(__dirname, "../../public")));

// ===== Routes =====
const messagesRoutes = require("../routes/messages");
app.use("/api/messages", messagesRoutes);

// ===== Obsługa 404 =====
app.use((req, res) => {
  res.status(404).json({ error: "Nie znaleziono endpointu" });
});

// ===== Globalny middleware błędów =====
app.use((err, req, res, next) => {
  console.error("Błąd aplikacji:", err.stack);
  res.status(500).json({ error: "Wewnętrzny błąd serwera" });
});

// ===== Start serwera =====
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});