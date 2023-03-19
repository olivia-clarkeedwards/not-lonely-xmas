exports.seed = function (knex) {
  return knex('loners').insert([
    {
      id: 1,
      location: 'Hogsmeade',
      first_name: 'Terry',
      age: 17,
      description:
        "Hi! I'm Terry, I am a student at Durmstrang and am visiting the UK and looking for a family to spend Christmas with.",
      family_id: null,
      is_matched: false,
    },
    {
      id: 2,
      location: 'Diagon Alley',
      first_name: 'Ernie',
      age: 24,
      description: "My family are away for Christmas so I'm all aloooone!",
      family_id: null,
      is_matched: false,
    },
    {
      id: 3,
      location: 'Surrey',
      first_name: 'Dudley',
      age: 27,
      description:
        "I'm a muggle, but would really love to spend Christmas with a wizarding family.",
      family_id: null,
      is_matched: false,
    },
    {
      id: 4,
      location: 'Springfield',
      first_name: 'Ned',
      age: 45,
      description:
        "Hi diddly-ho! I'm looking for a special fam to spend Christmas with!",
      family_id: null,
      is_matched: false,
    },
  ])
}
