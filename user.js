var user = {
  name: "Andrew Chen",
  location: 'Park City, Utah',
  occupations: ['fun stuff','lift operator','student'],
  hobbies: [
    {
      name: 'skating',
      type: 'current'
    },
    {
      name: 'snowboarding',
      type: 'current'
    },
    {
      name: 'cars',
      type: 'past'
    }
  ],
  family: [
    {
      name: 'Eric Chen',
      relation: 'father',
      gender: 'male'
    },
    {
      name: 'Tammie Chen',
      relation: 'mother',
      gender: 'female'
    },{
      name: 'Alicia Chen',
      relation: 'sister',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'tosh',
      type: 'japanese',
      rating: 5
    },
    {
      name: 'hsl',
      type: 'american',
      rating: 5
    },
    {
      name: 'copper onion',
      type: 'american',
      rating: 5
    }
  ]
};
module.exports = user;
