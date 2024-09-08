const AbstractSeeder = require("./AbstractSeeder");
const ArtSeeder = require("./ArtSeeder");
const ArtistSeeder = require("./ArtistSeeder");

class Art_ArtistSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "art_artist",
      truncate: true,
      dependencies: [ArtSeeder, ArtistSeeder],
    });
  }

  run() {
    const associations = [{}, {}, {}, {}, {}];

    associations.forEach((association, index) => {
      const artRef = this.getRef(`art_${index}`);
      const artistRef = this.getRef(`artist_${index}`);

      const art_artist = {
        art_id: artRef.insertId,
        artist_id: artistRef.insertId,
      };

      this.insert(art_artist);
    });
  }
}

module.exports = Art_ArtistSeeder;
