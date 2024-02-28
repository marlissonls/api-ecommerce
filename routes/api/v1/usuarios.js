import express from "express";
import auth from "../../auth.js";
import validate from "../../../helpers/validate.js";
import UsuarioController from "../../../controllers/UsuarioController.js";
import UsuarioValidation from "../../../controllers/validacoes/usuarioValidation.js";

const router = express.Router();

const usuarioController = new UsuarioController();

router.post("/login", validate(UsuarioValidation.login), usuarioController.login);
router.post("/registrar", validate(UsuarioValidation.store), usuarioController.store);
router.put("/", auth.required, validate(UsuarioValidation.update), usuarioController.update);
router.delete("/", auth.required, usuarioController.remove);

router.get("/recuperar-senha", usuarioController.showRecovery);
router.post("/recuperar-senha", usuarioController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

router.get("/", auth.required, usuarioController.index);
router.get("/:id", auth.required, validate(UsuarioValidation.show), usuarioController.show);

export default router;