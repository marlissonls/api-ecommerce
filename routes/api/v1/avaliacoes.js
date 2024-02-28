import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import AvaliacaoController from "../../../controllers/AvaliacaoController.js";
import AvaliacaoValidation from "../../../controllers/validacoes/avaliacaoValidation.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";

const router = express.Router();

const avaliacaoController = new AvaliacaoController();

// CLIENTES/VISITANTES
router.get("/", validate(AvaliacaoValidation.index), avaliacaoController.index);
router.get("/:id", validate(AvaliacaoValidation.show), avaliacaoController.show);
router.post("/", auth.required, validate(AvaliacaoValidation.store), avaliacaoController.store);

// ADMIN
router.delete("/:id", auth.required, LojaValidation.admin, validate(AvaliacaoValidation.remove), avaliacaoController.remove);

export default router;