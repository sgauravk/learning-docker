const app = require("express")();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("listenin on", PORT);
});
