exports.seed = (knex) => {
  return knex('families')
    .del()
    .then(() => {
      knex('loners').del()
    })

  // Delete data from child table(s) first, and use .then() to delete from parent tables
  // e.g. to delete data from profiles and then from users:
  // return knex('profiles')
  //   .del()
  //   .then(() => knex('users').del())
}
