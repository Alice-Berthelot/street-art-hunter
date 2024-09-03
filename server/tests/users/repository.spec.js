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
  test("tables.user = new UserRepository", async () => {
    // Assertions
    expect(tables.user instanceof UserRepository).toBe(true);
  });

  test("create => insert into", async () => {
    const result = [];

    jest.spyOn(database, "query").mockImplementation(() => [result]);

    const fakeUser = { email: "fakeuser@user.com", hashedPassword: "irABzhXyudJRuph", username: "fakeUser", city: "Paris" };

    const returned = await tables.user.create(fakeUser);

    expect(database.query).toHaveBeenCalledWith(
      "INSERT INTO user (email, hashed_password, username, city) VALUES (?, ?, ?, ?)",
      [fakeUser.email, fakeUser.hashedPassword, fakeUser.username, fakeUser.city]
    );
    expect(returned).toEqual();
  });

  test("readAll => select", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const returned = await tables.user.readAll();

    expect(database.query).toHaveBeenCalledWith("SELECT user.id, user.username, user.city, user.email, user.point_number, user.is_admin, user.registration_date FROM user");
    expect(returned).toStrictEqual(rows);
  });
});
