import Rental from '#models/rental'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class RentalSeeder extends BaseSeeder {
  public async run() {
    await Rental.createMany([
      {
        rentalDate: DateTime.fromISO('2025-01-01T10:00:00'),
        returnDate: DateTime.fromISO('2025-01-01T14:00:00'),
        distanceCovered: 20,
        bikeId: 1,
        userId: 1,
      },
      {
        rentalDate: DateTime.fromISO('2025-01-02T09:00:00'),
        returnDate: DateTime.fromISO('2025-01-02T12:00:00'),
        distanceCovered: 15,
        bikeId: 2,
        userId: 2,
      },
      {
        rentalDate: DateTime.fromISO('2025-01-03T14:00:00'),
        returnDate: DateTime.fromISO('2025-01-03T17:00:00'),
        distanceCovered: 25,
        bikeId: 3,
        userId: 3,
      },
    ])
  }
}
