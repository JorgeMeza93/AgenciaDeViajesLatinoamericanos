import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.render("inicio", {

    });
})
router.get("/nosotros", (req, res)=> {
    res.render("nosotros", {
        pagina: "Nosotros"
    });
});
router.get("/comentarios", (req, res)=> {
    res.render("comentarios", {
        pagina: "Comentarios"
    });
});
router.get("/viajes", (req, res) => {
    res.render("viajes", {
        pagina: "Viajes"
    });
});
router.get("/galeria", (req, res) => {
    res.render("galeria", {
        pagina: "Galeria"
    });
});

export default router;