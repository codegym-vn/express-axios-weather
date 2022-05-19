import express from "express";
import bodyParser from 'body-parser';
import axios from 'axios';

const PORT = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
  const url = 'http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=e591904cc60d2fb8edfdda95f9f8f5b9&lang=vi';
  const response = await axios.get(url);
  const data = response.data;
  console.log(data);
  if (data) {
    res.render("weather", {data: data})
  } else {
    res.end('<h1>Error<h1>')
  }
} catch (err) {
  res.end('<h1>Error<h1>')
}
})

app.listen(PORT, () => {
  console.log("App running with port: " + PORT)
})
