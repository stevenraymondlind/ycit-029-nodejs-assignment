const e = require("express");
const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];

// This route gets *ALL* the users
app.get("/api/users", (req, res) => {
  res.json(data);
});

// Add a new route to get a *SINGLE* user (you can use either path param or query param)



// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id) If you go with query param, just modify the existing endpoint above instead of creating a new endpoint

// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)


app.get("/api/users/:id", (req, res) => {
  let user = req.params.id - 1
  res.json(data[user])
});
app.post("/api/users/:id", (req, res) => {
  let id = req.params.id - 1
  res.json(data[id])
});
app.put("/api/users/:id", (req, res) => {
  let id = req.params.id - 1
  res.json(data[id])
});
app.delete("/api/users/:id", (req, res) => {
  let id = req.params.id - 1
  res.json(data[id])
});



app.listen(3030, () => {
  console.log("Example app listening on port 3030!");
});
