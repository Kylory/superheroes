const express = require('express')
const router = express.Router()
const {
  controllerWrapper,
  uploadImagesMiddleware,
} = require('../../middlewares')
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require('../../controllers/superheros')

router.get('/', controllerWrapper(getAll))

router.get('/:superheroId', controllerWrapper(getById))

router.post('/', uploadImagesMiddleware.array('images'), controllerWrapper(add))

router.put('/:superheroId', controllerWrapper(updateById))

router.delete('/:superheroId', controllerWrapper(removeById))

module.exports = router
