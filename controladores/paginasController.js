import { Viaje } from "../models/Viaje.js";
import Comentario from "../models/Comentarios.js";

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
const paginaComentarios = async (req, res)=> {
    try {
        const comentarios = await Comentario.findAll();
        res.render("comentarios", {
            pagina: "Comentarios",
            comentarios
        });
    } catch (error) {
        console.log(error);
    }
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
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({ where: { slug: slug } });
        res.render("viaje", {
            pagina: "Información Viaje",
            resultado
        });
    } catch (error) {
        console.log("Error ver detalles");
        console.log(error)
    }
}
const paginaContacto = (req, res) =>{
    res.render("contacto", {
        pagina: "Contacto"
    });
}
export { paginaInicio, paginaNosotros, paginaComentarios, paginaViajes, paginaGaleria, paginaDetalleViaje, paginaContacto } 