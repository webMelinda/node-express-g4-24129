const express = require("express");
const router = express.Router();

const controller = require('../controllers/invitacion.controller')

router.get('/', controller.index );
router.get("/:id", controller.show);

// Falta probar
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;