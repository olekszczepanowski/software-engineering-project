import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Bike from './bike.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Rental extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime()
  declare rentalDate: DateTime

  @column.dateTime()
  declare returnDate: DateTime

  @column()
  declare distanceCovered: number

  @column()
  declare bikeId: number

  @column()
  declare userId: number

  @belongsTo(() => Bike)
  declare bike: BelongsTo<typeof Bike>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
