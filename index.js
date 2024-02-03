require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const viajesRouter = require("./src/api/routes/viajes");
const hotelesRouter = require("./src/api/routes/hoteles");
const cors = require("cors"); // nos vale para poder usar el front y que se pueda abrir la página.
const usersRoutes = require("./src/api/routes/users");

const app =  express();

app.use(express.json());
 // me permite que mi servidor sea capaz de recibir cuerpos en formato json

 app.use(cors()) //esto nos va a permitir que cuando abramos la pagina front, una vez hecho el fetch, entonces nos va a dejar visualizar los datos sin problema

connectDB();

app.use("/api/v1/hoteles", hotelesRouter)
app.use("/api/v1/viajes", viajesRouter)
app.use("/api/v1/users",usersRoutes )

app.use("*",(req,res, next) =>{
  return res.status(404).json("Route not found")
})
app.listen(3000,  () =>{
  console.log("Servidor lanzado en: http://localhost:3000 🌴");
})