const userRoutes = (handler) => [
  {
    method: "GET",
    path: "/users",
    options: {
      handler: handler.getAllUsers, 
      plugins: {
        'hapi-rate-limit': {
          userLimit: 20, // Limit per user for this route
          pathLimit: 10, // Total limit for this route
          pathCache: {
            expiresIn: 60 * 1000, 
          },
        },
      },
    },
  },
  {
    method: "POST",
    path: "/users",
    options: {
      handler: handler.createUser,
      plugins: {
        'hapi-rate-limit': {
          userLimit: 10, // Limit per user for this route (different limit for POST)
          pathLimit: 30, // Total limit for this route
          pathCache: {
            expiresIn: 60 * 1000, // 1-minute window
          },
        },
      },
    },
  },
];

module.exports = userRoutes;
