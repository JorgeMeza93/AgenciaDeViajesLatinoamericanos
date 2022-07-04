import express from "express";
import { paginaInicio, paginaNosotros, paginaComentarios, paginaViajes, paginaGaleria } from "../controladores/paginasController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/comentarios", paginaComentarios);
router.get("/viajes", paginaViajes);
router.get("/galeria", paginaGaleria);

export default router;