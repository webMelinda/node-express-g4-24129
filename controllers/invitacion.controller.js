const db = require("../db/db");

const index = (req, res) => {
  const sql = `
    SELECT invitados.id, invitados.nombre, invitados.asistencia, 
           invitados.login_id, alimentacion.tipo AS prefAlimentaria, 
           entretenimiento.entretenimientos AS entretenimiento, 
           invitados.cancion 
    FROM invitados 
    LEFT JOIN alimentacion ON invitados.prefAlimentaria_id = alimentacion.id 
    LEFT JOIN entretenimiento ON invitados.entretenimiento_id = entretenimiento.id
  `;

  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Error en la consulta SQL" });
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


const store = (req, res) => {
  const { nombre, asistencia, login_id, prefAlimentaria_id, entretenimiento_id, cancion } = req.body;

  const sql = "INSERT INTO invitados (nombre, asistencia, login_id, prefAlimentaria_id, entretenimiento_id, cancion) VALUES (?, ?, ?, ?, ?, ?)";
  console.log("Consulta SQL generada:", sql);
  db.query(sql, [nombre, asistencia, login_id, prefAlimentaria_id, entretenimiento_id, cancion], (error, result) => {
    if (error) {
      console.error("Error en la consulta a la base de datos:", error);
      return res.status(500).json({ error: "Intente más tarde" });
    }

    const invitado = { ...req.body, id: result.insertId };

    res.json(invitado);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { nombre, asistencia, prefAlimentaria_id, entretenimiento_id, cancion } = req.body;

  const sql =

    "UPDATE invitados SET nombre = ?, asistencia = ?, prefAlimentaria_id = ?, entretenimiento_id = ?, cancion = ? WHERE id = ?";
  db.query(sql, [nombre, asistencia, prefAlimentaria_id, entretenimiento_id, cancion, id], (error, result) => {
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