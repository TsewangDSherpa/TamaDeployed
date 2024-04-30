// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// const db = require("./models");

// //routers
// const usersRouter = require("./routes/users");
// const petsRouter = require("./routes/pets");
// const dialogueRouter = require("./routes/dialogues");

// app.use("/auth", usersRouter);
// app.use("/pets", petsRouter);
// app.use("/dialogues", dialogueRouter);

// db.sequelize.sync().then(() => {
//   app.listen(3001, () => {
//     console.log("Server running on port 3001");
//   });
// });


const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;