/* eslint-disable object-shorthand */
const AbstractSeeder = require("./AbstractSeeder");

class ArtSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "art", truncate: true });
  }

  run() {
    const arts = [
      {
        title: null,
        information: null,
        latitude: 44.849304,
        longitude: -0.559219,
        upload_date: "2024-09-02",
        status: "pending",
      },
      {
        title: null,
        information: null,
        latitude: 44.849861,
        longitude: -0.559792,
        upload_date: "2024-09-01",
        status: "accepted",
      },
      {
        title: null,
        information: null,
        latitude: 44.849247,
        longitude: -0.560797,
        upload_date: "2024-08-31",
        status: "pending",
      },
      {
        title: null,
        information: null,
        latitude: 44.848892,
        longitude: -0.560161,
        upload_date: "2024-08-30",
        status: "pending",
      },
      {
        title: null,
        information: null,
        latitude: 44.82336,
        longitude: -0.554785,
        upload_date: "2024-09-02",
        status: "pending",
      },
      {
        title: "Purple tiger vec",
        information: null,
        latitude: 44.82661,
        longitude: -0.554671,
        upload_date: "2024-06-23",
        status: "accepted",
      },
    ];

    arts.forEach((art, index) => {
      const artWithRefName = {
        ...art,
        refName: `art_${index}`,
      };
      this.insert(artWithRefName);
    });
  }
}

module.exports = ArtSeeder;
