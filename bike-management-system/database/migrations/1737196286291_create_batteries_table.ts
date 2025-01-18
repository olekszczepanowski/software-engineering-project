import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'batteries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('max_capacity')
      table.integer('current_capacity')
      table.integer('charge_level').defaultTo(1)
      table.integer('charge_cycles').defaultTo(1)
      table.integer('bike_id').references('bikes.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
