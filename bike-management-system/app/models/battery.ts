import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Bike from './bike.js'

export default class Battery extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare maxCapacity: number
  @column()
  declare currentCapacity: number
  @column()
  declare chargeLevel: number
  @column()
  declare chargeCycles: number

  @column()
  declare bikeId: number

  @belongsTo(() => Bike)
  declare bike: BelongsTo<typeof Bike>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
