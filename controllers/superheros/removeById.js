const { removeSuperheroById } = require('../../model/superheros')
const { NotFound } = require('http-errors')

const removeById = async (req, res) => {
  const id = req.params.superheroId
  const result = await removeSuperheroById(id)

  if (!result) {
    throw new NotFound(`Superhero with id ${id} not found`)
  }

  res.json({ message: 'Superhero removed' })
}

module.exports = { removeById }
