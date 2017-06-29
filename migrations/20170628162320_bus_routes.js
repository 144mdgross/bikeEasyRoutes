
exports.up = function(knex) {
  return knex.schema.createTable('bus_routes', table => {
    table.increments(),
    table.string('city')
    table.string('bus_stop')
      .notNullable()
      .defaultTo('')
    table.string('bus_short_name')
      .notNullable()
      .defaultTo('')
    table.decimal('lat', 12, 10)
    table.decimal('lng', 14, 11)
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bus_routes')
};
