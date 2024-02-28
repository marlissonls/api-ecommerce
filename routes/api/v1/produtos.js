import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import ProdutoController from "../../../controllers/ProdutoController.js";
import ProdutoValidation from "../../../controllers/validacoes/produtoValidation.js";
import LojaValidation from "../../../controllers/validacoes/lojaValidation.js";
import upload from "../../../config/multer.js";

const router = express.Router();

const produtoController = new ProdutoController();

// ADMIN
router.post("/", auth.required, LojaValidation.admin, validate(ProdutoValidation.store), produtoController.store);
router.put("/:id", auth.required, LojaValidation.admin, validate(ProdutoValidation.update), produtoController.update);
router.put("/images/:id", auth.required, LojaValidation.admin, validate(ProdutoValidation.updateImages), upload.array("files", 4), produtoController.updateImages);
router.delete("/:id", auth.required, LojaValidation.admin, validate(ProdutoValidation.remove), produtoController.remove);

// CLIENTES/VISITANTES
router.get("/", validate(ProdutoValidation.index), produtoController.index);
router.get("/disponiveis", validate(ProdutoValidation.indexDisponiveis), produtoController.indexDisponiveis);
router.get("/search/:search", validate(ProdutoValidation.search), produtoController.search);
router.get("/:id", validate(ProdutoValidation.show), produtoController.show);

// VARIACOES
router.get("/:id/variacoes", validate(ProdutoValidation.showVariacoes), produtoController.showVariacoes);

// AVALIACOES
router.get("/:id/avaliacoes", validate(ProdutoValidation.showAvaliacoes), produtoController.showAvaliacoes);

export default router;