
exports.seed = function(knex, Promises) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Hyundai', model: 'Elantra', vin: 'DK383DM9EKDM1DM', mileage: 100000, transmission: "manual", title: "Salvage"},
        {make: 'Test', model: 'Elantra', vin: 'DFDFDFDFDFDF', mileage: 234234, transmission: "manual", title: "Salvage"},
        {make: 'Hyundai', model: 'Elantra', vin: 'DK383DM1DM', mileage: 111111, transmission: "manual", title: "Salvage"}
      ]);
    });
};
