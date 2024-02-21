import express from "express";
import usuariosRouter from "./usuarios.js";

const router = express.Router();

router.use("/usuarios", usuariosRouter);

export default router;