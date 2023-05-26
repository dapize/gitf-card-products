import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}`);
    console.log('DB Connection successfull');
  } catch (err) {
    console.log('DB Connection error', err);
  }
};

export default connect;
