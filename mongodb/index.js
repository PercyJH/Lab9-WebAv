import express from "express";
import { database_port_microservice } from "../config/config";

const app = express();

app.listen(database_port_microservice, () =>
  console.log(
    `Servidor de base de datos inicializado en el puerto ${database_port_microservice}`
  )
);
