import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import CategoriaController from "../../../controllers/CategoriaController.js";
import CategoriaValidation  from "../../../controllers/validacoes/categoriaValidation.js";
import LojaValidation   from "../../../controllers/validacoes/lojaValidation.js";

const router = express.Router();

const categoriaController = new CategoriaController();

router.get("/", validate(CategoriaValidation.index), categoriaController.index);
router.get("/disponiveis", validate(CategoriaValidation.indexDisponiveis), categoriaController.indexDisponiveis);
router.get("/:id", validate(CategoriaValidation.show), categoriaController.show);

router.post("/", auth.required, LojaValidation.admin, validate(CategoriaValidation.store), categoriaController.store);
router.put("/:id", auth.required, LojaValidation.admin, validate(CategoriaValidation.update), categoriaController.update);
router.delete("/:id", auth.required, LojaValidation.admin, validate(CategoriaValidation.remove), categoriaController.remove);

// ROTAS AO PRODUTO
router.get("/:id/produtos", categoriaController.showProdutos);
router.put("/:id/produtos", auth.required, LojaValidation.admin, categoriaController.updateProdutos );

export default router;