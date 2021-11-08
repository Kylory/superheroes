const { Superhero } = require('../../db/superheroModel')

const addSuperhero = async ({
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
}) => {
  return await Superhero.create({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  })
}

module.exports = addSuperhero
