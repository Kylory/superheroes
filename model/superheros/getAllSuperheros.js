const { Superhero } = require('../../db/superheroModel')

const getAllSuperheros = async (page = 1, limit = 20) => {
  const options = {
    page,
    limit,
  }
  return await Superhero.paginate(Superhero.find(), options)
}

module.exports = getAllSuperheros
