module.exports = {
  all: true,
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'src/tests',
    'src/database/config',
    'src/database/migrations',
    'src/database/seeders',
    'src/server.ts',
    'src/app.ts',
    'src/middlewares/middlewareError.ts'
  ],
  include: ['src/**/*.ts']
};
