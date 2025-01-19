import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Rental from './rental.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string
  @column()
  declare surname: string

  @column()
  declare email: string
  @column()
  declare phoneNumber: string
  @column()
  declare password: string

  @column.date()
  declare birthDate: DateTime

  @column.date()
  declare joinDate: DateTime

  @column()
  declare distanceTraveled: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @hasMany(() => Rental)
  declare rentals: HasMany<typeof Rental>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
