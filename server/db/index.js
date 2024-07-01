import mongoose from 'mongoose';

const connectDB = async (dbURI) => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected To Database Successfully');
  } catch (ere) {
    console.log('Error from connect DB', err);
  }
}

export default connectDB;