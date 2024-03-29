import mongoose from "mongoose";

import UserModel from "@/models/User"
import AccessModel from "@/models/models"
import CategoryModel from "@/models/Category"
import Config from "@/models/Config"
import Course from "@/models/Course"
import RequestModel from "@/models/request"



const connection : {isConnected?:number} = {};

async function dbConnect() {
  if(connection.isConnected){
    return;
  }
  const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!)
  connection.isConnected = db.connections[0].readyState;
}






export default dbConnect;
