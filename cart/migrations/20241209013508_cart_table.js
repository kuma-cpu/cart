
exports.up = function (knex) {
    return knex.schema.createTable("cart", (table) => {
      table.increments("id").primary();
      table.string("name", 128).notNullable();
      table.string("availability").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cart");
  };
  