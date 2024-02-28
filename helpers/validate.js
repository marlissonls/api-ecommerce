import Joi from "./joi.js";

const validate = (req, res, next, schema, action) => {
    if (schema.hasOwnProperty("params")) {
        const { error } = Joi.object(schema.params).validate(req.params);
        if (error) return res.status(400).json({ error });
    } 
    
    if (schema.hasOwnProperty("body")) {
        const { error } = Joi.object(schema.body).validate(req.body);
        if (error) return res.status(400).json({ error });
    }

    action(req, res, next);
}

export default validate;