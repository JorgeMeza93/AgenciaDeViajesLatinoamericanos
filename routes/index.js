import express from "express";
import { paginaInicio, paginaNosotros, paginaComentarios, paginaViajes, paginaGaleria, paginaDetalleViaje, paginaContacto } from "../controladores/paginasController.js";

const router = express.Router();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/comentarios", paginaComentarios);
router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje)
router.get("/galeria", paginaGaleria);
router.get("/contacto", paginaContacto);
router.post("/comentarios", guardarComentario);

export default router;