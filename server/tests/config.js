/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
require("dotenv").config();

const request = require("supertest");
const app = require("../app/app");
const database = require("../database/db");
const tables = require("../app/models/index");

// Restore all mocked functions after each test
afterEach(() => {
  jest.restoreAllMocks();
});

// Close the database connection after all tests have run
afterAll((done) => {
  database.end().then(done);
});

// Export the Express application, database client, request and tables objects for use in tests
module.exports = { app, database, request, tables };
