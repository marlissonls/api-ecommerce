import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import ClienteController from "../../../controllers/ClienteController.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";
import ClienteValidation from "../../../controllers/validacoes/clienteValidation.js";

const router = express.Router();

const clienteController = new ClienteController();

// ADMIN
router.get("/", auth.required, LojaValidation.admin, validate(ClienteValidation.index), clienteController.index);
router.get("/search/:search/pedidos", auth.required, LojaValidation.admin, validate(ClienteValidation.searchPedidos), clienteController.searchPedidos);
router.get("/search/:search", auth.required, LojaValidation.admin, validate(ClienteValidation.search), clienteController.search);
router.get("/admin/:id", auth.required, LojaValidation.admin, validate(ClienteValidation.showAdmin), clienteController.showAdmin);
router.get("/admin/:id/pedidos", auth.required, LojaValidation.admin, validate(ClienteValidation.showPedidosCliente), clienteController.showPedidosCliente);

router.delete("/admin/:id", auth.required, LojaValidation.admin, clienteController.removeAdmin);

router.put("/admin/:id", auth.required, LojaValidation.admin, validate(ClienteValidation.updateAdmin), clienteController.updateAdmin);

// CLIENTE
router.get("/:id", auth.required, validate(ClienteValidation.show), clienteController.show);

router.post("/", validate(ClienteValidation.store),  clienteController.store);
router.put("/:id", auth.required, validate(ClienteValidation.update), clienteController.update);
router.delete("/:id", auth.required, clienteController.remove);

export default router;