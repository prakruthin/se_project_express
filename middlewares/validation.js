const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const validateUrl = (value, helpers) => {
  if (validator.isURL(value)) {
    return true;
  }
  return helpers.error("string.uri");
};

const validateClothingItems = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).message({
      "string.min": "The min length of the name is 2",
      "string.max": "The max length of the name is 30",
      "string.empty": "The name feild must be filled in",
    }),
    url: Joi.string().required().custom(validateUrl).message({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'the "imageUrl" field must be a valid url',
    }),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).message({
      "string.min": "The min length of the name is 2",
      "string.max": "The max length of the name is 30",
      "string.empty": "The name feild must be filled in",
    }),
    avatar: Joi.string().required().custom(validateUrl).message({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'the "imageUrl" field must be a valid url',
    }),
    email: Joi.string().email().required().message({
      "string.email": 'The "email" field must be a valid email',
      "string.empty": 'The "email" field must be filled in',
    }),
    password: Joi.string().required().message({
      "string.empty": "The password feild must be filled in",
    }),
  }),
});

const validateLoginBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().message({
      "string.email": 'The "email" field must be a valid email',
      "string.empty": 'The "email" field must be filled in',
    }),
    password: Joi.string().required().message({
      "string.empty": "The password feild must be filled in",
    }),
  }),
});

const validateIdParam = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).message({
      "string.length": "The id must be 24 characters",
      "string.hex": "The id must be a valid hexadecimal value",
    }),
  }),
});

module.exports = {
  validateClothingItems,
  validateUser,
  validateLoginBody,
  validateIdParam,
};
