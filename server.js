const express = require("express");
const path = require("path");

const app = express();

const connectDB = require("./config/db");
connectDB();

app.use(express.json({ extended: true }));

//routes
app.use("/api/register", require("./routes/register"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/messages", require("./routes/messages"));
app.use("/api/", require("./routes/message"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
