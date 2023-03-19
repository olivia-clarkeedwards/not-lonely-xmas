exports.seed = function (knex) {
  return knex('families').insert([
    {
      id: 1,
      surname: 'Potter',
      location: "Godric's Hollow",
      size: 3,
      description:
        'Hi there, we are the Potters, we excited to welcome any loners to our Christmas table. Muggles are also welcome!',
      smokers: false,
      pets: true,
      loner_id: null,
      is_matched: false,
    },
    {
      id: 2,
      surname: 'Weasley',
      location: 'Wherever the Burrow is',
      size: 8,
      description:
        'We are the Weasleys, a warm and friendly family ready happy to host any loners for Christmas!',
      smokers: false,
      pets: true,
      loner_id: null,
      is_matched: false,
    },
    {
      id: 3,
      surname: 'Malfoy',
      location: 'Malfoy Manor',
      size: 3,
      description: 'We only want pure-bloods',
      smokers: true,
      pets: true,
      loner_id: null,
      is_matched: false,
    },
    {
      id: 4,
      surname: 'Simpsons',
      location: 'Springfield',
      size: 5,
      description: 'Duuuh duh duh duh duuuuh, duh duh duh dun na na nah',
      smokers: false,
      pets: true,
      loner_id: null,
      is_matched: false,
    },
  ])
}
