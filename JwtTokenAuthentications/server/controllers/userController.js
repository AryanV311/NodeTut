import validator from "validator";
import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("reddd", req.body);

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details !" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be atleast 8 character",
      });
    }

    const existingUser = await userModel.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return res.json({ success: false, message: "User already exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const loginUser = async(req,res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = await jwt.sign({id:user._id}, process.env.JWT_SECRET)
            return res.json({success:true,user:{id:user._id, name:user.name, email:user.email}, token})
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}