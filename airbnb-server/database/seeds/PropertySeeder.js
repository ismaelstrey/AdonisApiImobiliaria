'use strict'

/*
|--------------------------------------------------------------------------
| PropertySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')



class PropertySeeder {
  async run () {
    const properties = await Database.table('properties')
    console.log(properties)
  }

  // async run() {
  //   Factory.blueprint('App/Models/Property', (faker) => {
  //     return {
  //       username: faker.username(),
  //       user_id: '1',
  //       price: 50.00,
  //       latitude: '-29.5744',
  //       longitude: '-50.7876'
  //     }
  //   })
  // }
}

module.exports = PropertySeeder
