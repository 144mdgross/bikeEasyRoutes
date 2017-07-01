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
        }    
      ]);
    });
};

// Longmont 8th &amp; Coffman PnR Gate B
// 40.17129049696524
// -105.1039429055125

// FLEX longmont to Foco 8th and Coffman
// 40.17234240395998
// -105.103830010078

// Union Station Bus Terminal
// 39.75393195238262
// -105.001159562932

//Boulder Transit Center
//40.0167794617209
//-105.2763760730073
