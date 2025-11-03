const express = require('express');
const app = express();

app.use(express.json());

let items = [
   { id: 1, name: "Pen" },
   { id: 2, name: "Notebook" },
 ];

 app.post("/items", (req, res) => {
   const newItem = {
     id: Date.now(),
     name: req.body.name,
   };
   items.push(newItem);
   res.status(201).json(items);
 }); 

 app.get("/items", (req, res) => {
   res.json(items);
 });

 app.get("/items/:id", (req, res) => {
   const item = items.find(i => i.id == req.params.id);
   if (!item) return res.status(404).send("Item not found");
   res.json(item);
 });

 app.put("/items/:id", (req, res) => {
   const item = items.find(i => i.id == req.params.id);
   if (!item) return res.status(404).send("Item not found");
 
   item.name = req.body.name;
   res.json(item);
 });

 app.delete("/items/:id", (req, res) => {
   items = items.filter(i => i.id != req.params.id);
   res.sendStatus(204); // No Content
 });

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
});