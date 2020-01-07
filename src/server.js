/**
 * Note: As i understood i shouldn't be using any types of persistent database such as mysql or postgresql instead in-memory storage so the data is going to be in the form of plain objects
 */
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
