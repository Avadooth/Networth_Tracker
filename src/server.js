const Hapi = require("@hapi/hapi");
const { syncDatabase } = require("./models/user");
const userRoutes = require("./routes/user");
const userHandler = require("./handlers/userHandler");
require("dotenv").config();
const rateLimit = require("hapi-rate-limit");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  });

  await server.register({
    plugin: rateLimit,
    options: {
      userLimit: 100, // Default limit for users globally
      pathLimit: 500, // Default limit for any route globally
      userAttribute: "id", // Identify users uniquely
      pathCache: {
        expiresIn: 60 * 1000, // Global 1-minute window
      },
    },
  });

  // Register routes
  server.route(userRoutes(userHandler));

  // Sync database
  await syncDatabase();

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
