const { updateSuperheroById } = require('../../model/superheros/index')
const { NotFound, BadRequest } = require('http-errors')

const updateById = async (req, res) => {
  const id = req.params.superheroId
  const data = req.body

  // Якщо в тілі запиту порожній об'єкт
  if (!Object.keys(data).length) {
    throw new BadRequest('missing fields')
  }

  const updatedSuperhero = await updateSuperheroById(id, data)

  // Якщо не знайдено superhero в БД
  if (!updatedSuperhero) {
    throw new NotFound(`Superhero with id ${id} not found`)
  }

  res.json({ message: 'Superhero updated', updatedSuperhero: updatedSuperhero })
}

module.exports = { updateById }
