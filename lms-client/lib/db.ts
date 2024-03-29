
import mongoose from "mongoose";


const connect = async () => {

  try {

    if (!process.env.NEXT_PUBLIC_MONGO_URI) return;

    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);

    console.log("MongoDB connected");

  } catch (error) {

    console.log(error);

  }

};


export default connect;




