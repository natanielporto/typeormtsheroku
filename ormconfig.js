console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  entities: ['dist/models/**/*.ts'],
  migrations: ['dist/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models',
  },
};
