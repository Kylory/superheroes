const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const superheroSchema = new Schema({
  nickname: {
    type: String,
    required: [true, 'Set name for superhero'],
  },

  real_name: {
    type: String,
  },

  origin_description: {
    type: String,
  },

  superpowers: {
    type: String,
  },

  catch_phrase: {
    type: String,
  },

  images: {
    type: Array,
  },
})

superheroSchema.plugin(mongoosePaginate)

const Superhero = model('Superhero', superheroSchema)

module.exports = { Superhero }
