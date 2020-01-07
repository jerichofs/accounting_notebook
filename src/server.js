const express = require("express");

const app = express();

const port = 3000;

app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    msg: "Not found."
  });
});

app.listen(port, () => console.log("Server is listening on port", port));
