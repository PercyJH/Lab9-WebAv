import express from "express";
import mongoRouter from "./network";
import { database_port_microservice } from "../config/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoRouter);

//* database_port_microservice : 6601
app.listen(database_port_microservice, () =>
    console.log(`Servidor de base de datos inicializado en el puerto ${database_port_microservice}`)
);

