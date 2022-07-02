import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

//Habilitar Pug
app.set("view engine", "pug");
// Middleware pbtener el año actual
app.use( (req, res, next) => {
    res.locals.actualYear = new Date().getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return next();
})
// Definimos la carpeta publica que contiene las hojas de estilo y las imágenes
app.use(express.static("public"));
app.use("/", router);

app.listen(port, () =>{
    console.log(`El servidor está funcionando correctamente en el puerto ${port}`);
});