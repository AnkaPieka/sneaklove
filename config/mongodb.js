

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/sneaklove', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => console.log("yay mongodb connected :)"));

mongoose.connection.on("error", () => console.log("nay db error sorry :("));


