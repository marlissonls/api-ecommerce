import joi from "joi";
import joiDateExtension from "joi-date-extensions";

const Joi = joi.extend(joiDateExtension);

export default Joi;