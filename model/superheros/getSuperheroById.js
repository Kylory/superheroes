const { Superhero } = require('../../db/superheroModel')

const getSuperheroById = async (id) => {
  return await Superhero.findOne({ _id: id })
}

module.exports = getSuperheroById
