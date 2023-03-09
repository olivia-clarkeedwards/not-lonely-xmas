exports.up = (knex) => {
  return knex.schema.createTable('loners', (table) => {
    table.increments('id').primary()
    table.string('location')
    table.string('first_name')
    table.int('age')
    table.text('description')
    table.int('family_id')
    table.bool('is_matched')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('loners')
}
