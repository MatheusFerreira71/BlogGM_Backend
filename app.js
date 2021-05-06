var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require('dotenv').config();

const RouterTags = require("./src/routes/tags");
const RouterPosts = require("./src/routes/posts");
const RouterUsuarios = require("./src/routes/usuarios");
const RouterComentarios = require("./src/routes/comentarios");
const RouterCategorias = require("./src/routes/categorias");

var app = express();

const cors = require("cors");
app.use(cors());

// Importamos o código do módulo database e usamos a função connection para conectar ao banco de dados.
const database = require("./src/config/database");
database(process.env.CONNECTION_STRING);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/tags", RouterTags);
app.use("/posts", RouterPosts);
app.use("/usuarios", RouterUsuarios);
app.use("/comentarios", RouterComentarios);
app.use("/categorias", RouterCategorias);
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, ".", "src", "uploads"))
);

module.exports = app;
