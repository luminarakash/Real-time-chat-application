import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  
  {
    email: "a@gmail.com",
    fullName: "Akku",
    password: "121212",
    profilePic: "",
  },
  {
    email: "pachauri@gmail.com",
    fullName: "Abhay Pachauri",
    password: "123456",
    profilePic: "",
  },
  {
    email: "aman@gmail.com",
    fullName: "Aman Tiwari",
    password: "123456",
    profilePic: "",
  },
  {
    email: "singh@gmail.com",
    fullName: "Abhay Singh",
    password: "123456",
    profilePic: "",
  },
  {
    email: "tomar@gmail.com",
    fullName: "Aditya Tomar",
    password: "123456",
    profilePic: "",
  },
  {
    email: "Chandan@gmail.com",
    fullName: "Chandan",
    password: "123456",
    profilePic: "",
  },
  {
    email: "nitesh@gmail.com",
    fullName: "Nitesh Pal",
    password: "123456",
    profilePic: "",
  },
  {
    email: "vikash@gmail.com",
    fullName: "Vikash Verma",
    password: "123456",
    profilePic: "",
  },

 
  {
    email: "rama@gmail.com",
    fullName: "Ramanand",
    password: "123456",
    profilePic: "",
  },
  {
    email: "mishra@gmail.com",
    fullName: "Subham Mishra",
    password: "123456",
    profilePic: "",
  },
  {
    email: "ak@gmail.com",
    fullName: "Ankit",
    password: "123456",
    profilePic: "",
  },
  {
    email: "suraj@gmail.com",
    fullName: "Suraj",
    password: "123456",
    profilePic: "",
  },
  {
    email: "sharma@gmail.com",
    fullName: "Adtya Sharma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "vk@gmail.com",
    fullName: "Vishal Verma",
    password: "123456",
    profilePic: "",
  },
  {
    email: "manu@gmail.com",
    fullName: "Mandeep",
    password: "123456",
    profilePic: "",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
