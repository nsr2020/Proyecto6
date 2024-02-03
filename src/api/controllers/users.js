const { generateSign } = require("../../config/jwt");
const User = require("../models/users")
const bcrypt = require("bcrypt")

const getUsers = async (req, res, next) =>{
  try {
    const users = await User.find();
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }

}


//!creamos un primer administrador y luego que este sea el que decida hacer los cambios al resto, para 1ª vez rola new User(req.body)

const register = async (req, res, next) =>{
  try {
    const newUser = new User({
      email: req.body.email,
      userName: req.body.userName,
      password:req.body.password,
      yearBirth: req.body.yearBirth,
      rol: "user", 
      picProfile: req.body.picProfile
    })

    //para hacer que el usuario sea único

    const duplicatedUser = await User.findOne({userName: req.body.userName})

    if (duplicatedUser){
      return res.status(400).json("Usuario o contraseña no valida!!")
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
      
    const user = await User.findOne({ userName: req.body.userName });

      if (!user) {
          return res.status(400).json("Usuario no existente");
      }

      if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = generateSign(user._id);
          return res.status(200).json({ user, token });
      } else {
          return res.status(400).json("Usuario o contraseña no valida");
      }

  } catch (error) {
    console.log(error);
      return res.status(400).json(error);
     
  }
}


//exportaciones 

module.exports = { getUsers, register, login }