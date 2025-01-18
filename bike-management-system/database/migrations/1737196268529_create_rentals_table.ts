import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rentals'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('rental_date').defaultTo(this.now())
      table.timestamp('return_date')
      table.double('distance_covered')
      table.integer('bike_id').references('bikes.id').onDelete('CASCADE')
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
