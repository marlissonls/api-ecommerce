import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";
import LojaController from "../../../controllers/LojaController.js";

const router = express.Router();

const lojaController = new LojaController();

router.get("/", lojaController.index);
router.get("/:id", validate(LojaValidation.show), lojaController.show);

router.post("/", auth.required, validate(LojaValidation.store), lojaController.store);
router.put("/:id", auth.required, LojaValidation.admin, validate(LojaValidation.update), lojaController.update);
router.delete("/:id", auth.required, LojaValidation.admin, lojaController.remove);

export default router;