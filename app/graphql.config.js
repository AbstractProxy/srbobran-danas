module.exports = {
  projects: {
    app: {
      schema: ["src/schema.graphql", "directives.graphql"],
      documents: ["**/*.{js}", "../utills/queries/*.js"],
      extensions: {
        codegen: ["typescript"],
        endpoints: {
          default: {
            url: "http://localhost:3000",
            headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
          },
        },
      },
    },
    db: {
      schema: "src/generated/db.graphql",
      documents: ["src/db/**/*.js", "my/fragments.js"],
      extensions: {
        codegen: [
          {
            generator: "graphql-binding",
            language: "typescript",
            output: {
              binding: "src/generated/db.ts",
            },
          },
        ],
        endpoints: {
          default: {
            url: "http://localhost:3000",
            headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
          },
        },
      },
    },
  },
};
