'use strict'
const Factory = use('Factory')
const Database = use('Database')

class PropertiesSeeder {
  async run () {
    const properties = await Database.table('properties')
    console.log(properties)
  }
}

module.exports = PropertiesSeeder
