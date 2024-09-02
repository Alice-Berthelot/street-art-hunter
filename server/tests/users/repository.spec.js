// Import required dependencies
const { database, tables } = require("../config");

// Import repository classes
const AbstractRepository = require("../../database/models/AbstractRepository");
const UserRepository = require("../../database/models/UserRepository");

// Test suite for ItemRepository
describe("UserRepository", () => {
  // Test: Check if ItemRepository extends AbstractRepository
  test("UserRepository extends AbstractRepository", async () => {
    // Assertions
    expect(Object.getPrototypeOf(UserRepository)).toBe(AbstractRepository);
  });

  // Test: Check if tables.item is an instance of ItemRepository
  test("tables.item = new UserRepository", async () => {
    // Assertions
    expect(tables.item instanceof UserRepository).toBe(true);
  });

  // Test: Check if create method inserts data into the 'item' table
  test("create => insert into", async () => {
    // Mock result of the database query
    const result = [{ insertId: 1 }];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [result]);

    // Fake item data
    const fakeUser = { username: "fakeUser", id: 1 };

    // Call the create method of the item repository
    const returned = await tables.user.create(fakeUser);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "insert into user (username, id) values (?, ?)",
      [fakeItem.username, fakeItem.id]
    );
    expect(returned).toBe(result.insertId);
  });

  // Test: Check if readAll method selects all data from the 'item' table
  test("readAll => select", async () => {
    // Mock empty rows returned from the database
    const rows = [];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Call the readAll method of the item repository
    const returned = await tables.item.readAll();

    // Assertions
    expect(database.query).toHaveBeenCalledWith("select * from item");
    expect(returned).toStrictEqual(rows);
  });

  // Test: Check if read method selects data from the 'item' table based on id
  test("read => select with id", async () => {
    // Mock rows returned from the database
    const rows = [{}];

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    // Call the read method of the item repository
    const returned = await tables.item.read(0);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "select * from item where id = ?",
      [0]
    );
    expect(returned).toStrictEqual(rows[0]);
  });
});
