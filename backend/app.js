const express = require("express");
const app = express();
require("./connection/connection");
const auth = require("./routes/auth");
const todoList = require("./routes/todoList");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello");
});
app.use("/api/v1", auth);
app.use("/api/v2", todoList);
app.listen(1000, () => {
    console.log("Server is running on port 1000");
})
