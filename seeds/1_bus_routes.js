exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bus_routes').del()
    .then(function() {
      // Inserts seed entries
      return knex('bus_routes').insert([{
          id: 1,
          city: 'Denver',
          bus_stop: 'Union Station',
          bus_short_name: 'FF1',
          lat: 39.75393195238262,
          lng: -105.001159562932
        },
        {
          id: 2,
          city: 'Boulder',
          bus_stop: 'Boulder Transit Center',
          bus_short_name: 'FF1',
          lat: 40.0167794617209,
          lng: -105.2763760730073
        },
        {
          id: 3,
          city: 'Longmont',
          bus_stop: '8th and Coffman PnR',
          bus_short_name: 'BOLT',
          lat: 40.17129049696524,
          lng: -105.1039429055125
        },
        id: 4,
        city: 'Lousiville',
        bus_stop: 'Main & Spruce',
        bus_short_name: 'DASH',
        lat: 39.97724933775161,
        lng: -105.1321947919903
      ]);
    });
};
