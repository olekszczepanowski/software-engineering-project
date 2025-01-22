import Bike from '#models/bike'
import type { HttpContext } from '@adonisjs/core/http'

export default class BikesController {
  /**
   * Display a list of resources with their batteries (if they have one)
   */
  async index({}: HttpContext) {
    const bikes = await Bike.query().preload('battery')
    return bikes
  }

  /**
   * Show individual record with its battery (if it has one)
   */
  async show({ params }: HttpContext) {
    const bikeId = params.id

    const bike = await Bike.query().where('id', bikeId).preload('battery').firstOrFail()

    return bike
  }
}
