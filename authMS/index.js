import express from "express";
import { AUTH_PORT, DOMAIN } from "../config/config";

const app = express();

app.listen(AUTH_PORT, () =>
    console.log(`Auth MS on ${DOMAIN}:${AUTH_PORT}`)
);