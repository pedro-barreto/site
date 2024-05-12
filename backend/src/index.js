require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM obras";

  db.query(sql, (err, result) => {
    if (err) return res.json(err);

    return res.json(result);
  });
});

app.get("/obras/:id", (req, res) => {
  const sql = "SELECT * FROM obras WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) return res.json(err);

    return res.json(result);
  });
});

app.post("/cadastrar-obra", upload.single("imagem"), (req, res) => {
  const sql =
    "INSERT INTO obras (`nome`,`sinopse`,`duracao`,`data`,`avaliacao`, `imagem`) VALUES (?)";
  const values = [
    req.body.nome,
    req.body.sinopse,
    req.body.duracao,
    req.body.data,
    req.body.avaliacao,
    req.file.buffer,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);

    return res.json(result);
  });
});

app.listen(process.env.PORT_NODE, () => {
  console.log(`Servidor está rodando na porta ${process.env.PORT_NODE}`);
});
