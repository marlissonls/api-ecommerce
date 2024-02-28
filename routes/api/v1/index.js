import express from "express";
import usuariosRouter from "./usuarios.js";
import lojasRouter from "./lojas.js";
import clientesRouter from "./clientes.js";

const router = express.Router();

router.use("/usuarios", usuariosRouter);
router.use("/lojas", lojasRouter);
//router.use("/clientes", clientesRouter);

export default router;