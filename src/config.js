export const port = process.env.PORT || 3000;
const mongoHost = process.env.MONGODB_HOST
  ? process.env.MONGODB_HOST
  : 'localhost';
const mongoPort = process.env.MONGODB_PORT ? process.env.MONGODB_PORT : 27017;
const mongoDatabase = process.env.MONGODB_DATABASE
  ? process.env.MONGODB_DATABASE
  : 'shuffle';
export const connectionString = `mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`;
export const baseApi = 'api';
