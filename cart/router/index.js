
const { Router } = require("express")
const{productController,productCreater,deleteController,availabilityController,dropController} =require("../controller")

const router = Router()

router.route('/').get(productController)
router.route('/add').post(productCreater)
router.route('/delete').post(deleteController)
router.route('/availabilityadd/:id').get(availabilityController)
router.route('/availabilitydrop/:id').get(dropController)


module.exports = {router}