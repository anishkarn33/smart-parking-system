/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('parking_spot', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('status').notNullable().defaultTo('vacant'); // vacant or occupied
    })
    .createTable('user', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
    .createTable('parking_spot_occupancy', table => {
      table.increments('id').primary();
      table.integer('parking_spot_id').references('id').inTable('parking_spot');
      table.integer('user_id').references('id').inTable('user');
      table.dateTime('start_datetime');
      table.dateTime('end_datetime');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('parking_spot_occupancy')
    .dropTable('parking_spot')
    .dropTable('user');
};
