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
  //   updateStatusById,
} = require('../../controllers/superheros')

// router.use(authMiddleware)

router.get('/', controllerWrapper(getAll))

router.get('/:superheroId', controllerWrapper(getById))

// router.post('/', uploadImagesMiddleware.single('files'), controllerWrapper(add))
router.post('/', uploadImagesMiddleware.array('files'), controllerWrapper(add))

router.put('/:superheroId', controllerWrapper(updateById))

router.delete('/:superheroId', controllerWrapper(removeById))

module.exports = router
