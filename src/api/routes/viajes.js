const { getViajeById, getViajes, getViajeByPaquete, getViajeByPrice, postViaje, updatViaje, deleteViaje } = require("../controllers/viajes");


const viajesRouter = require("express").Router();

viajesRouter.get("/precio/:precio", getViajeByPrice)
viajesRouter.get("/paquete/:paquete", getViajeByPaquete)
viajesRouter.get("/:id", getViajeById)
viajesRouter.get("/", getViajes);
viajesRouter.post("/", postViaje)
viajesRouter.put("/:id",updatViaje)
viajesRouter.delete("/:id", deleteViaje)




module.exports = viajesRouter;


