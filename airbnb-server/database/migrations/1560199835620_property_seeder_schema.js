'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertySeederSchema extends Schema {
  up () {
    this.table('property_seeders', (table) => {
      // alter table
    })
  }

  down () {
    this.table('property_seeders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PropertySeederSchema
