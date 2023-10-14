const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.send("Forum Asisten IT Support Docker Test!");
});

app.get("/:name", async (req, res) => {
  const nama = req.params.name;
  res.send(`Hello ${nama},Selamat Datang Di Forum Asisten `);
});

app.listen(port, () => [
  console.log(`Forum Asisten Docker Test Running In Port ${port}`),
]);
