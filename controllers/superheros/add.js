const { addSuperhero } = require('../../model/superheros')
const { BadRequest } = require('http-errors')
const Joi = require('joi')
const path = require('path')

// const joiSchema = Joi.object({
//   nickname: Joi.string(),
//   real_name: Joi.string(),
//   origin_description: Joi.string(),
//   superpowers: Joi.string(),
//   catch_phrase: Joi.string(),
// })

const add = async (req, res) => {
  // console.log(req)
  // console.log(req.body)
  // const { error } = joiSchema.validate(req.body)
  // if (error) {
  //   // console.log(req.body)
  //   throw new BadRequest('missing required field')
  //   // res.status(400).json(req.body)
  // }

  // const newSuperhero = await addSuperhero(req.body)
  // console.log('files on back', req)
  console.log('files on back', req.files)
  console.log('data on back', req.body.data)

  // const files = req.body.data.get('file')
  // console.log(files)
  // Додаємо до назви ID юзера для унікальності назви аватару
  if (req.file) {
    // console.log(req.file)
    // const { path: tempDir, originalname } = req.file
    // const { _id } = req.user
    // const [extension] = originalname.split(' ').reverse()
    // const filename = `${_id}-${extension}`
    // // Переміщаємо аватар в public/avatars
    // const uploadDir = path.join(__dirname, '../../', 'public/avatars', filename)
    // try {
    //   await fs.rename(tempDir, uploadDir)
    //   req.images = [uploadDir]
    // } catch (error) {
    //   // Якщо щось пішло не так, то видаляємо завантажений аватар з тимчасової папки
    //   await fs.unlink(tempDir)
    //   next(error)
    // }
  }

  // const newSuperhero = await addSuperhero(req.body)

  // res
  //   .status(201)
  //   .json({ message: 'Added new superhero', newSuperhero: newSuperhero })
}

module.exports = {
  add,
}
