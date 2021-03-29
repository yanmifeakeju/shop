const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(
      `Connected to host ${connection.connection.host} on port ${connection.connection.port}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
