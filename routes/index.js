import express from "express";
import { paginaInicio, paginaNosotros, paginaComentarios, paginaViajes, paginaGaleria, paginaDetalleViaje } from "../controladores/paginasController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/comentarios", paginaComentarios);
router.get("/viajes", paginaViajes);
router.get("viajes/:viaje", paginaDetalleViaje)
router.get("/galeria", paginaGaleria);

export default router;