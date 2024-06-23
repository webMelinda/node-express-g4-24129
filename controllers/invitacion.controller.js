const db = require("../db/db");

const index = (req, res) => {
  const sql = "SELECT * FROM invitados";

  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "No hay datos" });
    }

    res.json(rows);
  });
};
 

const show = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM invitados WHERE id = ?";
  db.query(sql, [id], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (rows.length == 0) {
      return res.status(404).json({ error: "No existe el invitado" });
    }

    res.json(rows[0]);
  });
};

// Probar en Postman si funcionan

const store = (req, res) => {
  const { nombre, asistencia, prefAlimentaria, cancion } = req.body;

  const sql = "INSERT INTO invitados (nombre, asistencia, prefAlimentaria, cancion,) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, asistencia, prefAlimentaria, cancion], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    const invitados = { ...req.body, id: result.insertId };

    res.json(invitados);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { nombre, asistencia, prefAlimentaria, cancion } = req.body;

  const sql =
    "UPDATE invitados SET nombre = ?, asistencia = ?, prefAlimentaria = ?, cancion = ', WHERE id = ?";
  db.query(sql, [nombre, asistencia, prefAlimentaria, cancion, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).json({ error: "No existe el invitado" });
    }

    const invitados = { ...req.body, ...req.params };

    res.json(invitados);
  });
};

const destroy = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM invitados WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).json({ error: "No existe el invitado" });
    }

    res.json({ mensaje: `Invitado ${id} borrado` });
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};