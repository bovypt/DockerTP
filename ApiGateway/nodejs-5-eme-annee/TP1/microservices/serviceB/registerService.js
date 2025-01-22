const axios = require("axios");

async function registerService(name, url, description, registryUrl) {
  const registrationData = { name, url, description };

  try {
    const response = await axios.post(registryUrl, registrationData, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(`Enregistrement du service "${name}" réussi.`);
    return response.data;
  } catch (error) {
    console.error(
      `Erreur lors de l'enregistrement de "${name}" :`,
      error.message
    );
    throw error;
  }
}

module.exports = registerService;
