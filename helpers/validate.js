import Joi from "./joi.js";

const validate = (schema) => {
    return (req, res, next) => {
        if (schema.hasOwnProperty("params")) {
            const { error } = Joi.object(schema.params).validate(req.params);
            if (error) return res.status(400).json({ error });
        } 
        
        if (schema.hasOwnProperty("body")) {
            const { error } = Joi.object(schema.body).validate(req.body);
            if (error) return res.status(400).json({ error });
        }

        if (schema.hasOwnProperty("query")) {
            const { error } = Joi.object(schema.query).validate(req.query);
            if (error) return res.status(400).json({ error });
        }

        next();
    };
};

export default validate;