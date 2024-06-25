require('dotenv').config();

const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");


// app.use(express.static(path.join(__dirname, "public", "pages")));

app.use(express.static(path.join(__dirname, 'public')));

// const invitacionRouter = require('./routes/invitacion.router')
// app.use("/lista",invitacionRouter);
app.use("/lista", require("./routes/invitacion.router"));


// app.get("/", (req, res) => {
//   res.send("Hola desde Express!!!");
// });
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/invitados", (req, res) => {
    // Login
    res.sendFile(path.join(__dirname, "private", "invitados.html"));
  });
  
  app.get("/lista", (req, res) => {
    console.log(req.query);
    res.sendFile(path.join(__dirname, "invitados.json"));
  });
  
  app.get("/invitados/:id", (req, res) => {
    console.log(req.params.id);
    res.send("Invitado: " + req.params.id);
  });
  

  const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))