const express = require('express')
const app = express()
const logger = require("./middleware/logger")
const mongoose = require('mongoose');
const User = require('./models/User');
// const productRoutes = require("./routes/products");

mongoose.connect("mongodb+srv://hoosulyn_db_user:F4mpNL46y3PDxf0K@talentcorp.kvbvvtp.mongodb.net/?appName=TalentCorp")
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.error("Connection error:", err));

app.use(express.json())
app.use(logger)

// app.use("/products", productRoutes);

const bcrypt = require("bcrypt");
 
 app.post("/register", async (req, res) => {
   const hashed = await bcrypt.hash(req.body.password, 10);
   const user = new User({ email: req.body.email, password: hashed });
   await user.save();
   res.status(201).send("User registered");
 });

 app.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    const jwt = require("jsonwebtoken");
    const token = jwt.sign({ id: user._id }, "Un86Wid+Lx/7zpT+DVEc4oSdZZSm7iBv", { expiresIn: "1h" });
    res.json({ token });
 });

 app.get("/getuser", async (req, res) => {
    const user = await User.find()
    res.json(user)
 })

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
});