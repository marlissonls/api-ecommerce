import express from "express";

import usuarios from "./usuarios.js";
import clientes from "./clientes.js";
import lojas from "./lojas.js";
import categorias from "./categorias.js"
import produtos from "./produtos.js"

const router = express.Router();

router.use("/usuarios", usuarios);
router.use("/clientes", clientes);
router.use("/lojas", lojas);

router.use("/categorias", categorias);
router.use("/produtos", produtos);
// router.use("/avaliacoes", avaliacoes);
// router.use("/variacoes", variacoes");

// router.use("/pedidos", pedidos);
// router.use("/entregas", entregas);
// router.use("/pagamentos", pagamentos);

export default router;