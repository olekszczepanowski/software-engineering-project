import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('surname')
      table.string('email').notNullable()
      table.string('phone_number').notNullable()
      table.string('password').notNullable()
      table.date('birth_date')
      table.date('join_date').defaultTo(this.now())
      table.double('distance_traveled').defaultTo(0)
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
