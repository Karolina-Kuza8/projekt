const express = require("express");
const router = express.Router();
const Message = require("../models/message");

// GET – wszystkie wiadomości
router.get("/", async (req, res) => {
  try {
    const messages = await Message.getAllMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Błąd pobierania wiadomości" });
  }
});

// POST – dodanie wiadomości
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Wszystkie pola są wymagane" });
  }

  try {
    const result = await Message.createMessage(name, email, message);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Błąd zapisu do bazy" });
  }
});

// DELETE – usunięcie wiadomości
router.delete("/:id", async (req, res) => {
  try {
    const result = await Message.deleteMessage(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Błąd usuwania" });
  }
});

module.exports = router;