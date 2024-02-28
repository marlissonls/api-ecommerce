import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import PagamentoController from "../../../controllers/PagamentoController.js";
import PagamentoValidation from "../../../controllers/validacoes/pagamentoValidation.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";

const router = express.Router();

const pagamentoController = new PagamentoController();

// TESTE
if(process.env.NODE_ENV !== "production"){
    router.get("/tokens", (req, res) => res.render("pagseguro/index"));
}

// PAGSEGURO
router.post("/notificacao", pagamentoController.verNotificacao);
router.get("/session", pagamentoController.getSessionId);

// CLIENTE
router.get("/:id", auth.required, validate(PagamentoValidation.show), pagamentoController.show);
router.post("/pagar/:id", auth.required, validate(PagamentoValidation.pagar), pagamentoController.pagar);

// ADMIN
router.put("/:id", auth.required, LojaValidation.admin, validate(PagamentoValidation.update), pagamentoController.update);

module.exports = router;