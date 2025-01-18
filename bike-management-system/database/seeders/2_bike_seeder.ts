import Bike from '#models/bike'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Bike.createMany([
      {
        lastServiceDate: DateTime.fromISO('2025-01-01'),
        class: 'Sportowy',
        type: 'Elektryczny',
        distanceTraveled: 5000,
        costPercentage: 85,
        available: true,
        rentalCount: 20,
        model: 'eBike S100',
        qrKey: 123456,
      },
      {
        lastServiceDate: DateTime.fromISO('2024-12-15'),
        class: 'Górski',
        type: 'Klasyczny',
        distanceTraveled: 2000,
        costPercentage: 60,
        available: true,
        rentalCount: 10,
        model: 'Mountain Bike G500',
        qrKey: 654321,
      },
      {
        lastServiceDate: DateTime.fromISO('2025-01-10'),
        class: 'Miejski',
        type: 'Klasyczny',
        distanceTraveled: 1000,
        costPercentage: 30,
        available: true,
        rentalCount: 5,
        model: 'City Bike M200',
        qrKey: 789123,
      },
    ])
  }
}
