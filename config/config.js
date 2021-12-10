/* eslint-disable no-undef */
//? este config se encargara de exportar mis variables

export const base_url = "/api";

export const DOMAIN = process.env.DOMAIN || "http://localhost";

export const port = process.env.PORT || 6600;

export const AUTH_PORT = process.env.AUTH_PORT || 5000;

export const secret = process.env.SECRET || "secret";

//const mongo_local = "mongodb://192.168.1.3:27017/local";
const mongo_remote = "mongodb+srv://root:HCvGNnErj26OFkDJ@cluster0.xwxrh.mongodb.net/?retryWrites=true&w=majority";

export const db_url  = process.env.DB_URL || mongo_remote

export const database_port_microservice = process.env.DATABASE_PORT_MICROSERVICE || 6601;