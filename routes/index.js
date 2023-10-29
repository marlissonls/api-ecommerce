import express from "express";
import api_v1 from "./api/v1/";

export const router = express.Router()

router.use('/v1/api', api_v1);
router.get('/', (req, res, next) => res.send({ ok: true }));