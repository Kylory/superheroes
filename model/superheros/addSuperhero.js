const { Superhero } = require('../../db/superheroModel')

const addSuperhero = async ({
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  images,
}) => {
  return await Superhero.create({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  })
}

module.exports = addSuperhero
