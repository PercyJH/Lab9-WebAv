import express from "express";
import * as MODELS from "./models";
import response from "../network";

const mongoRouter = express.Router();

mongoRouter.get("/:model", list);

const list = (req,res) => {
    let model = req.params.model;
    //res.send("Hola Mongo");
}