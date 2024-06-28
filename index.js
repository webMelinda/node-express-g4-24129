require('dotenv').config();

const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const favicon = require('serve-favicon');



app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.json());

app.use("/invitados", require("./routes/invitacion.router"));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
  

  const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))