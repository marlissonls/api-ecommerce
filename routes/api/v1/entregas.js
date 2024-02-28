import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import EntregaController from "../../../controllers/EntregaController.js";
import EntregaValidation from "../../../controllers/validacoes/entregaValidation.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";

const router = express.Router();

const entregaController = new EntregaController();

router.get("/:id", auth.required, validate(EntregaValidation.show), entregaController.show);
router.put("/:id", auth.required, LojaValidation.admin, validate(EntregaValidation.update), entregaController.update);
router.post("/calcular", validate(EntregaValidation.calcular), entregaController.calcular);

export default router;