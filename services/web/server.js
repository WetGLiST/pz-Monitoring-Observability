const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://webapi:4000/health");
    res.send(`
      <h1>Web Service</h1>
      <p>WebAPI status: ${response.data.status}</p>
    `);
  } catch (err) {
    res.send(`
      <h1>Web Service</h1>
      <p style="color:red;">WebAPI is DOWN</p>
    `);
  }
});

app.listen(3000, () => console.log("Web running on 3000"));
