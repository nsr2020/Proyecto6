const Hotel = require("../models/hoteles.js")

const getHotels = async (req, res, next)=>{
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels)
  } catch (error) {
   return res.status(400).json("Error")
    
  }
}


const getHotelById = async (req, res, next)=>{
  try {
    const {id} = req.params;
    const hotel = await Hotel.findById(id);
    return res.status(200).json(hotel)
  } catch (error) {
    return res.status(400).json("Error")
    
  }
}
const getHotelByStar= async (req, res, next)=>{
  try {
    const {estrellas} = req.params;
    const hoteles = await Hotel.find({estrellas})
    return res.status(200).json(hoteles) 
  } catch (error) {
    return res.status(400).json("Error")
    
  }
}
const getHotelByCountry = async (req, res, next)=>{
  try {
    const {pais} = req.params;
    const hoteles = await Hotel.find({pais})
    return res.status(200).json(hoteles)
  } catch (error) {
    return res.status(400).json("Error")
    
  }
}



const postHotel = async (req, res, next)=>{
  try {  /*app.use(express.json());  importante configurar esto en index.js para que pueda leer json. */
  console.log(req.body);
    const newHotel = new Hotel(req.body);
    const hotelSaved = await newHotel.save()
    console.log(hotelSaved);
    return res.status(201).json(hotelSaved)
    
  } catch (error) {
    console.log(error);
    return res.status(400).json("Error")
  }
}

const updateHotel = async (req, res, next)=>{
  try {
    const {id} = req.params;
    const newHotel = new Hotel(req.body)
    newHotel._id = id;
    const hotelUdated = await Hotel.findByIdAndUpdate(id, newHotel, {new: true} );
    return res.status(200).json(hotelUdated)
  } catch (error) {
    return res.status(400).json("Error")
  }
}

const deleteHotel = async (req, res, next)=>{
  try {
    const {id} = req.params;
    const hotelDeleted = await Hotel.findByIdAndDelete(id);
    return res.status(200).json(hotelDeleted)

  } catch (error) {
    return res.status(400).json("Error")
  }
}

 module.exports ={getHotels, getHotelById, getHotelByCountry, getHotelByStar, postHotel, updateHotel, deleteHotel}