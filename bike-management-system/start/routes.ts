/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

const UsersController = () => import('#controllers/users_controller')
const BikesController = () => import('#controllers/bikes_controller')
const RentalsController = () => import('#controllers/rentals_controller')
router.resource('users', UsersController)
router.get('/bikes', [BikesController, 'index'])
router.get('/bikes/:id', [BikesController, 'show'])
router.post('/rentals', [RentalsController, 'store'])
router.get('/rentals', [RentalsController, 'index'])
router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

// Renders Swagger-UI and passes YAML-output of /swagger
router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
  // return AutoSwagger.default.scalar("/swagger"); to use Scalar instead
  // return AutoSwagger.default.rapidoc("/swagger", "view"); to use RapiDoc instead (pass "view" default, or "read" to change the render-style)
})
