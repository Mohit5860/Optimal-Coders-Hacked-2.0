import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../Model/User.js";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, password, bloodGroup, city, pincode } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send("User already exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      bloodType: bloodGroup,
      pincode,
      city,
    });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid password");
    }
    const id = user.email;

    res.status(200).send({ id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const getUsr =  async (req, res) => {
  const { token } = req.body;
  const user = await User.findOne({email: token.trim()});
  res.json(user);
};
export { register, login, getUsr };
