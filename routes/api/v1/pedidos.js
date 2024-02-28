import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import PedidoController from "../../../controllers/PedidoController.js";
import PedidoValidation from "../../../controllers/validacoes/pedidoValidation.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";

const router = express.Router();

const pedidoController = new PedidoController();

// ADMIN
router.get("/admin", auth.required, LojaValidation.admin, validate(PedidoValidation.indexAdmin), pedidoController.indexAdmin);
router.get("/admin/:id", auth.required, LojaValidation.admin, validate(PedidoValidation.showAdmin), pedidoController.showAdmin);

router.delete("/admin/:id", auth.required, LojaValidation.admin, validate(PedidoValidation.removeAdmin), pedidoController.removeAdmin);

// -- carrinho
router.get("/admin/:id/carrinho", auth.required, LojaValidation.admin, validate(PedidoValidation.showCarrinhoPedidoAdmin), pedidoController.showCarrinhoPedidoAdmin);

// CLIENTE
router.get("/", auth.required, validate(PedidoValidation.index), pedidoController.index);
router.get("/:id", auth.required, validate(PedidoValidation.show), pedidoController.show);

router.post("/", auth.required, validate(PedidoValidation.store), pedidoController.store);
router.delete("/:id", auth.required, validate(PedidoValidation.remove), pedidoController.remove);

// -- carrinho
router.get("/:id/carrinho", auth.required, validate(PedidoValidation.showCarrinhoPedido), pedidoController.showCarrinhoPedido);

export default router;