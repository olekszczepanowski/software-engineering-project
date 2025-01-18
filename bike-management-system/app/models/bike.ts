import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Bike extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.date()
  declare lastServiceDate: DateTime

  @column()
  declare class: 'Sportowy' | 'Górski' | 'Miejski'

  @column()
  declare type: 'Klasyczny' | 'Elektryczny'

  @column()
  declare distanceTraveled: number

  @column()
  declare costPercentage: number

  @column()
  declare available: boolean

  @column()
  declare rentalCount: number

  @column()
  declare model: string

  @column()
  declare qrKey: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
