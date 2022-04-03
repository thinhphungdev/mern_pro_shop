import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

import users from "./data/users.js";
import products from "./data/products.js";

import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUsers = createdUsers[2]._id;

    const sampleProduct = products.map((product) => {
      return {
        ...product,
        user: adminUsers,
      };
    });

    await Product.insertMany(sampleProduct);

    console.log("Data Imported".inverse.bgGreen);
  } catch (error) {
    console.log(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data Destroyed!".inverse.bgRed);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "--d") {
  destroyData();
} else {
  importData();
}
