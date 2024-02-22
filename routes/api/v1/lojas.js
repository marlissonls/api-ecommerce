import express from "express";
//import { validate } from "express-validation";
import auth from "../../auth.js";
import lojaValidation from "../../../controllers/validacoes/lojaValidation.js";
import LojaController from "../../../controllers/LojaController.js";

const router = express.Router();

const lojaController = new LojaController();

router.get("/", lojaController.index);
router.get("/:id", lojaController.show);

router.post("/", auth.required, lojaController.store);
router.put("/:id", auth.required, lojaValidation, lojaController.update);
router.delete("/:id", auth.required, lojaValidation, lojaController.remove);

export default router;