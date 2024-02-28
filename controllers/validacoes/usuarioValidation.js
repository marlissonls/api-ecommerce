import Joi from '../../helpers/joi.js';

const UsuarioValidation = {
    show: {
        params: {
            id: Joi.string().alphanum().length(24).required()
        }
    },
    store:{
        body: {
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            loja: Joi.string().alphanum().length(24).required()
        }
    },
    update:{
        body: {
            nome: Joi.string().optional(),
            email: Joi.string().email().optional(),
            password: Joi.string().optional()
        }
    },
    login: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    }
};

export default UsuarioValidation;