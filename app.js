const express = require("express");
const app = express();


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  return res.send("Otra pagina corriendo en un servidor");
})
app.get('/other', (req, res) => {
  return res.send("Otra pagina 2");
})
app.use('/', (req, res) => {
  return res.send("Pagina no encontrada 2");
})
app.listen(port, (req, res) => {
  return console.log(`Server run on port ${port}`)
})