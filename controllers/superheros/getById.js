const { getSuperheroById } = require('../../model/superheros/index')
const { NotFound } = require('http-errors')

const getById = async (req, res) => {
  const id = req.params.superheroId
  const result = await getSuperheroById(id)

  if (!result) {
    throw new NotFound(`Superhero with id ${id} not found`)
  }

  res.json(result)
}

module.exports = { getById }
