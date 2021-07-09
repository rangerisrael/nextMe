export interface DatabaseConfig {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
  host: string;
  port: number;
  name: string;
  user: string;
  password: string;
}

export interface SwaggerConfig {
  title: string;
  description: string;
}

// export interface FirebaseConfig {
//   projectId: string;
//   privateKey: string;
//   clientEmail: string;
//}

export interface Config {
  port: number;
  prefix: string;
  database: DatabaseConfig;
  swagger: SwaggerConfig;
  // firebase: FirebaseConfig;
}

export default (): Config => ({
  port: parseInt(process.env.PORT, 10) || 3334,
  prefix: process.env.PREFIX || 'api',
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  swagger: {
    title: process.env.SWAGGER_TITLE || 'Portfolio API',
    description: process.env.SWAGGER_DESC || 'Portfolio API',
  },
  // firebase: {
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Newline in private keys are not properly parsed by dotenv
  //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // },
});
