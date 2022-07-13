import Comentario from "../models/Comentarios.js";

const guardarComentario = async (req, res) => {
    //Validar
    let { nombre, email, mensaje} = req.body;
    nombre = nombre ?? "";
    email = email ?? "";
    mensaje = mensaje ?? "";
    const vacios = nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "" ? true : false;
    if(vacios){
        const comentarios = await Comentario.findALL();
        res.render("comentarios", {
            pagina: "Comentarios",
            error: "Todos los campos son obligatorios",
            nombre,
            email,
            mensaje,
            comentarios
        })
    }
    else{
        try {
            await Comentario.create({
                nombre,
                email,
                mensaje
            });
            res.redirect("/comentarios");
        } catch (error) {
            console.log("Error en la insersión de datos \n" + error);
        }
    }
}
export { guardarComentario }

/*const vacios = nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "" ? true : false;
if(vacios){
    res.render("comentarios", {
        pagina: "Comentarios",
        error: "Todos los campos son obligatorios",
        nombre, 
        email, 
        mensaje
    });
} */