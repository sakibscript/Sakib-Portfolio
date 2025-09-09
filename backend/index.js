// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const { messageRouter } = require("./routes/message");

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use("/message", messageRouter);

// (async function main() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("Connected to database");

//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT);
//   } catch (error) {
//     console.log(error);
//     console.log("Failed to connect to database");
//   }
// })();
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { messageRouter } = require("./routes/message");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/message", messageRouter);

(async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  }
})();
