const { Superhero } = require('../../db/superheroModel')

const removeSuperheroById = async (id) => {
  return await Superhero.findByIdAndRemove({ _id: id })
}

module.exports = removeSuperheroById
