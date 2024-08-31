import { User } from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phone, password, role } = req.body;

    // Check if all required fields are provided
    if (!fullname || !email || !phone || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Check if user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phone,
      role,
    });

    // Return success message and token
    return res.status(201).json({
      message: "Account created successfully!",
      success: true,

      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid username or password", success: false });
    }
    const ispasswordmatched = await bcryptjs.compare(password, user.password);
    if (!ispasswordmatched) {
      return res
        .status(400)
        .json({ message: "Invalid username or password", success: false });
    }

    // const tokendata={userId:user._id}
    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Login Successfully !!!",
        success: true,
        _id: user._id,
        email: user.email,
        fullname: user.fullname,

        token: token,
      });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
 
    const id = req.params.id;
        const update = await User.findByIdAndUpdate({_id:id},req.body,{new:true})
        // const update = await User.findByIdAndUpdate({_id:id})
// 
        res.send(update);

}


export const single=async(req,res)=>{

  // myapp.get("/singledata/:id",async(req,res)=>{
    const id = req.params.id;
        const singledata = await User.findById({_id:id});
        res.send(singledata);



}
 

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    

    const user = await User.findOne(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    await user.deleteOne();

    return res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    if (!users) {
      return res
        .status(404)
        .json({ message: "No users found", success: false });
    }

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const getOtherUsers = async (req, res) => {
  try {
    const loggedInUserId = req.id;
    const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    return res.status(200).json(otherUsers);
  } catch (error) {
    console.error(error);
  }
};
