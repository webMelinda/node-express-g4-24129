require('dotenv').config();

const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");




app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use("/invitados", require("./routes/invitacion.router"));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

  
  // app.get("/lista/:id", (req, res) => {
  //   console.log(req.params.id);
  //   res.send("Invitado: " + req.params.id);
  // });
  

  const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))