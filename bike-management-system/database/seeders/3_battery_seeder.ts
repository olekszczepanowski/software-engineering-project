import Battery from '#models/battery'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Battery.create({
      maxCapacity: 500,
      currentCapacity: 450,
      bikeId: 1,
    })
  }
}
