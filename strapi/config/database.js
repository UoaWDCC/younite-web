const path = require("path");

module.exports = ({ env }) => {
  const client =
    process.env.NODE_ENV === "production"
      ? env("DATABASE_CLIENT", "postgres")
      : "sqlite";

  const connections = {
    sqlite: {
      connection: {
        filename: path.join(__dirname, "..", ".tmp/data.db"),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
