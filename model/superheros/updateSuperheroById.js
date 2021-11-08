const { Superhero } = require('../../db/superheroModel')

const updateSuperheroById = (id, data) => {
  return Superhero.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  })
}

module.exports = updateSuperheroById
