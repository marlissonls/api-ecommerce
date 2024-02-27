import express from "express";
import Joi from "joi";
import auth from "../../auth.js";
import UsuarioController from "../../../controllers/UsuarioController.js";
import UsuarioValidation from "../../../controllers/validacoes/usuarioValidation.js";

const usuarioController = new UsuarioController();

const router = express.Router();

const validate = (req, res, next, validationSchema, method) => {
    const { error } = Joi.object(validationSchema).validate(req.body);
    if (error) return res.status(400).json({ error });
    method(req, res, next);
}

router.post("/login", (req, res, next) => {
    validate(req, res, next, UsuarioValidation.login.body, usuarioController.login);
});

router.post("/registrar", (req, res, next) => {
    validate(req, res, next, UsuarioValidation.store.body, usuarioController.store);
});

router.put("/", auth.required, (req, res, next) => {
    validate(req, res, next, UsuarioValidation.update.body, usuarioController.update);
});

router.delete("/", auth.required, usuarioController.remove);

router.get("/recuperar-senha", usuarioController.showRecovery);
router.post("/recuperar-senha", usuarioController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

router.get("/", auth.required, usuarioController.index);
router.get("/:id", auth.required, (req, res, next) => {
    validate(req, res, next, UsuarioValidation.show.params, usuarioController.show);
});

export default router;