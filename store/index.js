import { Model } from "mongoose";

/**
 * Listar en base al model
 * @param {Model} model
 * @returns {Array}
 */
export const list = async (model) => await model.find();