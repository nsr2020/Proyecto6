const {getHotelById, getHotels, getHotelByStar, getHotelByCountry, postHotel, updateHotel, deleteHotel } = require("../controllers/hoteles.js");


const hotelesRouter = require("express").Router();

hotelesRouter.get("/estrellas/:estrellas", getHotelByStar)
hotelesRouter.get("/pais/:pais", getHotelByCountry)
hotelesRouter.get("/:id", getHotelById)
hotelesRouter.get("/", getHotels);
hotelesRouter.post("/", postHotel)
hotelesRouter.put("/:id",updateHotel)
hotelesRouter.delete("/:id", deleteHotel)


module.exports = hotelesRouter;
