import Joi from "joi";

const cateValidator = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  slug: Joi.string().required(),
});

export default cateValidator;
