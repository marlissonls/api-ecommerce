import express from "express";
import usuariosRouter from "./usuarios.js";
import lojasRouter from "./lojas.js"

const router = express.Router();

router.use("/usuarios", usuariosRouter);
router.use("/lojas", lojasRouter);

export default router;