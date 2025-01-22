const express = require("express");
const registerService = require("./registerService");
const app = express();
const PORT = 4010;
const REGISTRY_URL = "http://localhost:3000/api/services/register";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Réponse du Service B" });
});

app.listen(PORT, async () => {
  console.log(`Service B démarré sur http://localhost:${PORT}`);

  try {
    await registerService(
      "ServiceB",
      `http://localhost:${PORT}`,
      "Description de Service B",
      REGISTRY_URL
    );
  } catch (error) {
    console.error(
      "Le service n'a pas pu s'enregistrer automatiquement.",
      error
    );
  }
});
