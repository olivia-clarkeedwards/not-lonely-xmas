exports.up = (knex) => {
  return knex.schema.createTable('families', (table) => {
    table.increments('id').primary()
    table.string('surname')
    table.string('location')
    table.integer('size')
    table.text('description')
    table.bool('smokers')
    table.bool('pets')
    table.integer('loner_id')
    table.bool('is_matched')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('families')
}
