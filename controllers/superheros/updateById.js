const { updateSuperheroById } = require('../../model/superheros/index')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  nickname: Joi.string(),
  real_name: Joi.string(),
  origin_description: Joi.string(),
  superpowers: Joi.string(),
  catch_phrase: Joi.string(),
})

const updateById = async (req, res) => {
  const id = req.params.superheroId
  const data = req.body
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing fields')
  }

  // Якщо в тілі запиту порожній об'єкт
  if (!Object.keys(data).length) {
    throw new BadRequest('missing fields')
  }

  const updatedSuperhero = await updateSuperheroById(id, data)

  // Якщо котакт не знайдено в БД
  if (!updatedSuperhero) {
    throw new NotFound(`Superhero with id ${id} not found`)
  }

  res.json({ message: 'Superhero updated', updatedSuperhero: updatedSuperhero })
}

module.exports = { updateById }
