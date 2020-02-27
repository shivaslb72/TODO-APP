const express = require("express")
const router = express()
const notesController = require("../app/controllers/notesController")

router.get("/notes", notesController.list);
router.get("/notes/:id", notesController.show);
router.post("/notes", notesController.create);
router.put("/notes/:id", notesController.update);
router.delete("/notes/:id", notesController.destroy);

module.exports = router