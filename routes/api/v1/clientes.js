import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import ClienteController from "../../../controllers/ClienteController.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";
import ClienteValidation from "../../../controllers/validacoes/clienteValidation.js";

const router = express.Router();

const clienteController = new ClienteController();

// ADMIN
router.get("/", auth.required, LojaValidation.admin, (req, res, next) => validate(req, res, next, ClienteValidation.index, clienteController.index));
router.get("/search/:search/pedidos", auth.required, LojaValidation.admin, (req, res, next) => validate(req, res, next, ClienteValidation.searchPedidos, clienteController.searchPedidos));
router.get("/search/:search", auth.required, LojaValidation.admin, (req, res, next) => validate(req, res, next, ClienteValidation.search, clienteController.search));
router.get("/admin/:id", auth.required, LojaValidation.admin, (req, res, next) => validate(req, res, next, ClienteValidation.showAdmin, clienteController.showAdmin));
router.get("/admin/:id/pedidos", auth.required, LojaValidation.admin, (req, res, next) => validate(req, res, next, ClienteValidation.showPedidosCliente, clienteController.showPedidosCliente));

router.delete("/admin/:id", auth.required, LojaValidation.admin, clienteController.removeAdmin);

router.put("/admin/:id", auth.required, LojaValidation.admin, (req, res, next) => validate(req, res, next, ClienteValidation.updateAdmin, clienteController.updateAdmin));

// CLIENTE
router.get("/:id", auth.required, (req, res, next) => validate(req, res, next, ClienteValidation.show, clienteController.show));

router.post("/", (req, res, next) => validate(req, res, next, ClienteValidation.store,  clienteController.store));
router.put("/:id", auth.required, (req, res, next) => validate(req, res, next, ClienteValidation.update, clienteController.update));
router.delete("/:id", auth.required, clienteController.remove);

export default router;