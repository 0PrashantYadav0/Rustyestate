import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async(req, res, next) => {

  try {
    const {username, email, password } = req.body;
    if(!username && !password && !email) {
      req.status(403).json({message:"Please enter username, email and password"})
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({username, email, password: hashedPassword});
    const createdUser = await User.findById(user._id).select("-password")
    
    
    res.status(201).json("User created successfully")
  
  } catch (error) {
    next(errorHandler(500, 'Error creating user'));
  }
}

export const signin = async(req,res, next) => {
  const {email, password} = req.body;
  try {
    const validUser = await User.findOne({email})
    if(!validUser){
      return next(errorHandler(404, 'Email in not correct'))
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if(!validPassword){
      return next(errorHandler(401, "Password is incorrect"));
    }

    const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET,)

    const {password: pass, ...rest} = validUser

    res
    .cookie('access_token', token, {httpOnly: true, expiresIn: '10d' })
    .status(200)
    .json(rest)
  } catch (error) {
    next(error);
  }
}