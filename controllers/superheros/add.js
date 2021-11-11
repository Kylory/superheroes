const { addSuperhero } = require('../../model/superheros')
const cloudinary = require('cloudinary').v2
require('dotenv').config()

const add = async (req, res) => {
  if (req.files.length !== 0) {
    const cloudinaryUpload = async (image) => {
      const result = await cloudinary.uploader.upload(`./temp/${image}`, {
        resource_type: 'image',
      })
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
