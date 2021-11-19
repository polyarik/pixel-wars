import express from "express";

const app = express();
app.use(express.static("public"));
app.use(express.static("dist"));

const port = process.env.PORT || 3000;
const server = app.listen(port);

console.log(`server is up: port ${port}`);

// ...
