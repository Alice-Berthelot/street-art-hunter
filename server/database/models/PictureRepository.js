const AbstractRepository = require("./AbstractRepository");

class PictureRepository extends AbstractRepository {
  constructor() {
    super({ table: "picture" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async create(picture) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (image, user_id, art_id) VALUES (?, ?, ?)`,
      [picture.image, picture.user_id, picture.art_id]
    );

    return result.insertId;
  }

  async deleteByUserId(userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return result.affectedRows;
  }
}

module.exports = PictureRepository;
