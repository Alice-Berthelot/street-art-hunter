const AbstractRepository = require("./AbstractRepository");
const fs = require("fs");
const path = require("path");

class ArtRepository extends AbstractRepository {
  constructor() {
    super({ table: "art" });
    this.uploadDir = path.join(__dirname, "/../../public/assets/images/upload");
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id, ${this.table}.latitude, ${this.table}.longitude, ${this.table}.title, ${this.table}.information, p.image FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id`
    );
    return rows;
  }

  async readAccepted() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id, ${this.table}.latitude, ${this.table}.longitude, ${this.table}.title, ${this.table}.information, p.image FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id WHERE ${this.table}.status = 'accepted'`
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.*, p.image, a.name as artist FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id LEFT JOIN art_artist as aa on aa.art_id=${this.table}.id LEFT JOIN artist as a on a.id=aa.artist_id WHERE p.user_id = ?`,
      [id]
    );
    return rows;
  }

  async readGallery() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.id, ${this.table}.title, ${this.table}.information, ${this.table}.upload_date, ${this.table}.status, p.image, u.username FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id JOIN user as u ON p.user_id=u.id`
    );
    return rows;
  }

  async readComparedArts() {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.*, p.id as picture_id, p.image, u.username, a.name as artist_name FROM ${this.table} JOIN picture as p ON p.art_id=${this.table}.id JOIN user as u ON p.user_id = u.id LEFT JOIN 
      art_artist as aa ON aa.art_id = ${this.table}.id LEFT JOIN artist as a ON a.id = aa.artist_id WHERE ${this.table}.status != 'refused'`
    );
    return rows;
  }

  async readTotalArts() {
    const [rows] = await this.database.query(
      `SELECT count(*) as totalArts, sum(CASE WHEN upload_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) THEN 1 ELSE 0 END) AS recentArts FROM ${this.table}`
    );
    return rows[0];
  }

  async create(art) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, information, latitude, longitude, status) VALUES (?, ?, ?, ?, ?)`,
      [art.title, art.information, art.latitude, art.longitude, art.status]
    );

    return result.insertId;
  }

  async update(art, id) {
    const [result] = await this.database.query(
      `update ${this.table} set status = ? where id = ?`,
      [art.status, id]
    );
    return result.affectedRows;
  }

  // async deleteByUserId(userId) {
  //   const [result] = await this.database.query(
  //     `DELETE FROM ${this.table} LEFT JOIN picture as p on p.art_id=${this.table}.id WHERE p.user_id = ?`,
  //     [userId]
  //   );
  //   return result.affectedRows;
  // }

  async delete(id) {
    try {
      const [picture] = await this.database.query(
        "SELECT image FROM picture WHERE art_id = ?",
        [id]
      );

      const pictureName = picture[0].image;

      const filePath = path.join(this.uploadDir, pictureName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        console.warn("Fichier non trouvé:", filePath);
      }

      await this.database.query("DELETE FROM picture WHERE art_id = ?", [id]);

      const [result] = await this.database.query(
        `DELETE FROM ${this.table} WHERE id = ?`,
        [id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ArtRepository;
