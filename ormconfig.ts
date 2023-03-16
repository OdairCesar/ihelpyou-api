import { DataSource } from "typeorm";
import { AuthORM } from "./src/database/typeorm/entity/AuthORM";
import { BaseRegistrationORM } from "./src/database/typeorm/entity/BaseRegistrationORM";
import { CompanyORM } from "./src/database/typeorm/entity/CompanyORM";
import { BankCompanyORM } from "./src/database/typeorm/entity/BankCompanyORM";
import { BankAnalysisORM } from "./src/database/typeorm/entity/BankAnalysisORM";
import { OrderORM } from "./src/database/typeorm/entity/OrderORM";
import { OrderEvaluationORM } from "./src/database/typeorm/entity/OrderEvaluationORM";
import { UserORM } from "./src/database/typeorm/entity/UserORM";
import { UserCardORM } from "./src/database/typeorm/entity/UserCardORM";
import { ServiceORM } from "./src/database/typeorm/entity/ServiceORM";
import { ServiceAnalysisORM } from "./src/database/typeorm/entity/ServiceAnalysisORM";
import { DepartmentORM } from "./src/database/typeorm/entity/DepartmentORM";
import { StateORM } from "./src/database/typeorm/entity/StateORM";
import { CompanyStatusORM } from "./src/database/typeorm/entity/CompanyStatusORM";
import { CityORM } from "./src/database/typeorm/entity/CityORM";
import { CompanyDepartmentORM } from "./src/database/typeorm/entity/CompanyDepartmentORM";
import { PlatformPlanORM } from "./src/database/typeorm/entity/PlatformPlanORM";
import { PlatformBenefitORM } from "./src/database/typeorm/entity/PlatformBenefitORM";

const connectionSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "ihelpyou",
  synchronize: true,
  logging: true,
  entities: [
    AuthORM,
    BankCompanyORM,
    BankAnalysisORM,
    BaseRegistrationORM,
    CityORM,
    CompanyDepartmentORM,
    CompanyORM,
    ServiceORM,
    CompanyStatusORM,
    DepartmentORM,
    OrderEvaluationORM,
    OrderORM,
    PlatformBenefitORM,
    PlatformPlanORM,
    ServiceAnalysisORM,
    StateORM,
    UserCardORM,
    UserORM,
  ],
  migrations: ["src/database/typeorm/migration/**/*.ts"],
  subscribers: ["src/database/typeorm/subscriber/**/*.ts"],
  // cli: {
  //   migrationsDir: "src/database/typeorm/migration"
  // }
});

connectionSource.initialize();

export { connectionSource as dataSource }
