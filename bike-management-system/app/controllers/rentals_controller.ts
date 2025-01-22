import Rental from '#models/rental'
import { createRentalValidator } from '#validators/rental'
import type { HttpContext } from '@adonisjs/core/http'

export default class RentalsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const rentals = Rental.all()
    return rentals
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createRentalValidator)
    const rental = await Rental.create(payload)
    return {
      message: 'Rental created.',
      rental,
    }
  }

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) {}

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  // /**
  //  * Delete record
  //  */
  // async destroy({ params }: HttpContext) {}
}
