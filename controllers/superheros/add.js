const { addSuperhero } = require('../../model/superheros')
const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string(),
  origin_description: Joi.string(),
  superpowers: Joi.string(),
  catch_phrase: Joi.string(),
})

const add = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing required field')
  }

  const newSuperhero = await addSuperhero(req.body)

  res
    .status(201)
    .json({ message: 'Added new superhero', newSuperhero: newSuperhero })
}

module.exports = {
  add,
}
