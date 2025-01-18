import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bikes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('last_service_date')
      table.enum('class', ['Sportowy', 'Górski', 'Miejski'])
      table.double('distance_traveled')
      table.integer('cost_percentage')
      table.boolean('available').defaultTo(true)
      table.enum('type', ['Klasyczny', 'Elektryczny'])
      table.integer('rental_count')
      table.string('model')
      table.integer('qr_key').defaultTo(123125)

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
