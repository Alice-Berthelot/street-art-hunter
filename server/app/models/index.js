const ArtRepository = require("./repositories/ArtRepository");
const UserRepository = require("./repositories/UserRepository");
const PictureRepository = require("./repositories/PictureRepository");
const ArtistRepository = require("./repositories/ArtistRepository");

const repositories = {};

repositories.art = new ArtRepository();
repositories.user = new UserRepository();
repositories.picture = new PictureRepository();
repositories.artist = new ArtistRepository();


// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(repositories, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `repositories.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
