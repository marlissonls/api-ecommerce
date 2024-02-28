import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import VariacaoController from "../../../controllers/VariacaoController.js";
import VariacaoValidation from "../../../controllers/validacoes/variacaoValidation.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";
import upload from "../../../config/multer.js";

const router = express.Router();

const variacaoController = new VariacaoController();

router.get("/", validate(VariacaoValidation.index), variacaoController.index);
router.get("/:id", validate(VariacaoValidation.show), variacaoController.show);

router.post("/", auth.required, LojaValidation.admin, validate(VariacaoValidation.store), variacaoController.store);
router.put("/:id", auth.required, LojaValidation.admin, validate(VariacaoValidation.update), variacaoController.update);
router.put("/images/:id", auth.required, LojaValidation.admin, validate(VariacaoValidation.updateImages), upload.array("files", 4), variacaoController.updateImages);
router.delete("/:id", auth.required, LojaValidation.admin, validate(VariacaoValidation.remove), variacaoController.remove);

export default router;