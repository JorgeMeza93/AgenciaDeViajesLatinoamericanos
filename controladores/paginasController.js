import { Viaje } from "../models/Viaje.js";
const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: "Inicio"
    });
}
const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros"
    });
}
const paginaComentarios = (req, res)=> {
    res.render("comentarios", {
        pagina: "Comentarios"
    });
}
const paginaViajes = async (req, res) => {
    //Consultar la base de datos
    const viajes = await Viaje.findAll();
    
    res.render("viajes", {
        pagina: "Viajes",
        viajes
    });
}
const paginaGaleria = (req, res) => {
    res.render("galeria", {
        pagina: "Galeria"
    });
}

export { paginaInicio, paginaNosotros, paginaComentarios, paginaViajes, paginaGaleria } 