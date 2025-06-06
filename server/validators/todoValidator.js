import Joi from 'joi';

export const todoValidation = Joi.object({
  task: Joi.string().min(1).max(50).required(),
  completed: Joi.boolean().optional(),
  short_desc: Joi.string().min(1).max(150).required(),
  date_and_time: Joi.date().required()
});

export const todoUpdateValidation = Joi.object({
    task: Joi.string().max(50).optional(),
    completed: Joi.boolean().optional(),
    short_desc: Joi.string().max(150).optional(),
    date_and_time: Joi.date().optional()
  });
