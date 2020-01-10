
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.text('vin', 128).unique().notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.text('transmission', 128)
        tbl.text('title', 128)
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
