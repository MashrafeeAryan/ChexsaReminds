const express = require("express"); // import Express (web server)
const cors = require("cors");       // allows frontend to talk to backend
//MongoDB connection
const mongoose = require("mongoose")
const app = express(); // create the server

// middleware (runs before routes)
app.use(cors());           // allow requests from React
app.use(express.json());   // lets us read JSON data from requests

// temporary storage (just an array for now)
let reminders = [];

// test route (open in browser to check server is working)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// create reminder (main feature)
app.post("/reminder", (req, res) => {
  const { email, message, time } = req.body; // get data from frontend

  // basic validation (make sure nothing is missing)
  if (!email || !message || !time) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // create a reminder object
  const newReminder = {
    id: Date.now(), // simple unique id
    email,
    message,
    time,
  };

  reminders.push(newReminder); // save it in memory

  console.log("Saved:", newReminder); // log in terminal (for debugging)

  // send response back to frontend
  res.json({ message: "Reminder saved!", reminder: newReminder });
});

// get all reminders (for testing in browser)
app.get("/reminders", (req, res) => {
  res.json(reminders);
});

// start server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});