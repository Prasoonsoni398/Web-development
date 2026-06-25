import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All fields required" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
      return;
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };
    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });
    res.status(201).json({message:"User Registered Successfully"})

  } catch (error) {
    res.status(500).json({message:"Internal Sever Error"})
  }
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from auth controller" });
};


export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from auth controller" });
};
