import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'John',
        surname: 'Doe',
        email: 'user1@example.com',
        phoneNumber: '123456789',
        password: 'password1',
        birthDate: DateTime.fromISO('1990-01-01'),
        joinDate: DateTime.now(),
        distanceTraveled: 1000,
      },
      {
        name: 'Marcin',
        surname: 'Markowski',
        email: 'user2@example.com',
        phoneNumber: '987654321',
        password: 'password2',
        birthDate: DateTime.fromISO('1995-05-15'),
        joinDate: DateTime.now(),
        distanceTraveled: 500,
      },
      {
        name: 'Jan',
        surname: 'Nowak',
        email: 'user3@example.com',
        phoneNumber: '112233445',
        password: 'password3',
        birthDate: DateTime.fromISO('2000-09-09'),
        joinDate: DateTime.now(),
        distanceTraveled: 1500,
      },
    ])
  }
}
