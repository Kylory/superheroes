const { addSuperhero } = require('../../model/superheros')
const { BadRequest } = require('http-errors')
const Joi = require('joi')
const path = require('path')
const fs = require('fs-extra')
require('dotenv').config()

const cloudinary = require('cloudinary').v2

// const joiSchema = Joi.object({
//   nickname: Joi.string(),
//   real_name: Joi.string(),
//   origin_description: Joi.string(),
//   superpowers: Joi.string(),
//   catch_phrase: Joi.string(),
// })

const add = async (req, res) => {
  // const { error } = joiSchema.validate(req.body)
  // if (error) {
  //   throw new BadRequest('missing required field')
  // }

  // const newSuperhero = await addSuperhero(req.body)

  // console.log('files on back', req.files)
  // console.log('data on back', req.body)

  // Додаємо до назви ID юзера для унікальності назви аватару
  if (req.files.length !== 0) {
    const cloudinaryUpload = async (image) => {
      const result = await cloudinary.uploader.upload(`./temp/${image}`, {
        resource_type: 'image',
      })
      // .then((result) => {
      //   console.log('success', JSON.stringify(result.secure_url, null, 2))
      // })
      // .catch((result) => {
      //   console.log('error', JSON.stringify(error, null, 2))
      // })
      // console.log(result.secure_url)
      return result.secure_url
    }

    try {
      const upload = async (array) => {
        const promises = array.map((element) =>
          cloudinaryUpload(element.originalname)
        )
        return await Promise.all(promises)
      }

      req.body.images = await upload(req.files)

      // await fs.unlink(tempDir)
      // fs.emptyDir('../../temp', (err) => {
      //   if (err) return err
      //   console.log('success!')
      // })
      // next(error)
    } catch (error) {
      console.log(error)
    }
  }

  const newSuperhero = await addSuperhero(req.body)

  res
    .status(201)
    .json({ message: 'Added new superhero', newSuperhero: newSuperhero })
}

module.exports = {
  add,
}
