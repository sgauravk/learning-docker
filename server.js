const app = require("express")();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send(`hello ${process.env.NAME}`);
});

app.listen(PORT, () => {
  console.log("listenin on", PORT);
});
