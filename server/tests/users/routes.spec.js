const { app, request, database } = require("../config");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.APP_SECRET;
const generateFakeToken = () => {
  return jwt.sign({ sub: 3, role: 1 }, SECRET_KEY);
};

describe("GET /api/users", () => {
  it("should fetch users successfully", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const response = await request(app).get("/api/users");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows);
  });
});

describe("GET /api/users/:id", () => {
  it("should fetch a single user successfully", async () => {
    const rows = [{}];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const response = await request(app).get(`/api/users/3`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows[0]);
  });

  it("should return 404 for non-existent item", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const response = await request(app).get("/api/users/77");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});


describe("PUT /api/users/:id", () => {
  it("should update the username successfully", async () => {
    const token = generateFakeToken(); 
    const result = [{ affectedRows: 1 }];

    jest.spyOn(database, "query").mockImplementation(() => [result]);

    const fakeUser = { username: "fakeuser", id: 3 };

    const response = await request(app)
      .put(`/api/users/${fakeUser.id}`)
      .set("Authorization", `Bearer ${token}`) 
      .send(fakeUser);

    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });
  });

  describe("PUT /api/users/editpoint", () => {
    it("should update the point number successfully", async () => {
      const token = generateFakeToken(); 
      const result = [{ affectedRows: 1 }];

      jest.spyOn(database, "query").mockImplementation(() => [result]);

      const fakeNumber = { pointNumber: "30", artId: 3 };

      const response = await request(app)
      .put(`/api/users/editpoint`)
      .set("Authorization", `Bearer ${token}`) 
      .send(fakeNumber);

      expect(response.status).toBe(204);
      expect(response.body).toEqual({});
    });
});
