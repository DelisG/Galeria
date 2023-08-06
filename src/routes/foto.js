import express from "express";
import FotoController from "../controllers/fotoController.js";

const router = express.Router();

router
  .get("/", FotoController.getAllFotos)
  .post("/", FotoController.createFotos)
  .put("/:id", FotoController.updateFotos)
  .get("/:id", FotoController.getByIdFotos)
  .delete("/:id", FotoController.deleteFotos)
  .delete("/", FotoController.deleteAllFotos);

export default router;
