import { DataSource } from "typeorm"

export const connectionSource = new DataSource ({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "mysql",
  synchronize: true,
  logging: true,
  entities: [
    "src/database/typeorm/entity/**/*.ts"
  ],
  migrations: [
    "src/database/typeorm/migration/**/*.ts"
  ],
  subscribers: [
    "src/database/typeorm/subscriber/**/*.ts"
  ],
  // cli: {
  //   migrationsDir: "src/database/typeorm/migration"
  // }
})
