import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1681256766275 implements MigrationInterface {
    name = 'createTables1681256766275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`state\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`country\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`city\` (\`id\` varchar(36) NOT NULL, \`city\` varchar(255) NOT NULL, \`idStateId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bank_analysis\` (\`id\` varchar(36) NOT NULL, \`maximum\` int NULL, \`minimum\` int NULL, \`avgDay\` int NULL, \`avgWeek\` int NULL, \`avgService\` int NULL, \`dateStart\` datetime NOT NULL, \`idBankId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service_analysis\` (\`id\` varchar(36) NOT NULL, \`amountAvgDay\` int NOT NULL, \`amountAvgWeek\` int NOT NULL, \`amountAvgMonth\` int NOT NULL, \`timeMdPerUser\` varchar(255) NOT NULL, \`views\` int NOT NULL, \`purchaseCancelled\` int NOT NULL, \`idServiceId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`image\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_card\` (\`id\` varchar(36) NOT NULL, \`numberCard\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`validity\` datetime NOT NULL, \`securityCode\` int NOT NULL, \`idUserId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_orm\` (\`id\` varchar(36) NOT NULL, \`cpf\` int NOT NULL, \`idBaseRegistrationId\` varchar(36) NULL, UNIQUE INDEX \`REL_d72859a9bd83ffbe8a7cfac298\` (\`idBaseRegistrationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_evalution\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NULL, \`description\` varchar(255) NULL, \`date\` datetime NOT NULL, \`amountStars\` int NOT NULL, \`idUserId\` varchar(36) NULL, \`idOrderId\` varchar(36) NULL, \`idServiceId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`minTime\` varchar(255) NULL, \`maxTime\` varchar(255) NULL, \`image\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`idDepartmentId\` varchar(36) NULL, \`idCompanyId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` varchar(36) NOT NULL, \`dataStart\` datetime NOT NULL, \`dataFinish\` datetime NULL, \`sttService\` varchar(255) NOT NULL, \`sttPayment\` varchar(255) NOT NULL, \`idBankCompanyId\` varchar(36) NULL, \`idUserCardId\` varchar(36) NULL, \`idUserId\` varchar(36) NULL, \`idServiceId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bank_company\` (\`id\` varchar(36) NOT NULL, \`bank\` int NOT NULL, \`bankHolder\` varchar(255) NOT NULL, \`cpf\` int NOT NULL, \`cnpj\` int NOT NULL, \`agency\` int NOT NULL, \`account\` int NOT NULL, \`pix\` varchar(255) NULL, \`idCompanyId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`platform_benefit\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`amount\` int NOT NULL, \`idPlanId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`platform_plan\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`periodInMonth\` int NOT NULL, \`limit\` varchar(255) NOT NULL, \`value\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`company_status\` (\`id\` varchar(36) NOT NULL, \`paid\` tinyint NOT NULL, \`restriction\` tinyint NOT NULL, \`dateAdmission\` datetime NOT NULL, \`activated\` tinyint NOT NULL, \`idPlanId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`company\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`mei\` bigint NULL, \`cnpj\` bigint NULL, \`cpf\` bigint NULL, \`idBaseRegistrationId\` varchar(36) NULL, \`idStatusId\` varchar(36) NULL, UNIQUE INDEX \`REL_bebc6a5f842d39d3662af58860\` (\`idBaseRegistrationId\`), UNIQUE INDEX \`REL_d2c3c1c36411839c0a4f75e539\` (\`idStatusId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`base_registration\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`fone\` int NOT NULL, \`image\` varchar(255) NULL, \`address\` varchar(255) NOT NULL, \`addressNumber\` int NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL, \`idAuthId\` varchar(36) NULL, \`idCityId\` varchar(36) NULL, UNIQUE INDEX \`REL_58d6fdcc6d60f7531104364861\` (\`idAuthId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`auth\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`google\` varchar(255) NULL, \`facebook\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`company_department\` (\`id\` varchar(36) NOT NULL, \`id_company\` varchar(255) NOT NULL, \`id_department\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department_companies_company\` (\`departmentId\` varchar(36) NOT NULL, \`companyId\` varchar(36) NOT NULL, INDEX \`IDX_32bb638e45771765a87fddbed3\` (\`departmentId\`), INDEX \`IDX_a1a2cc88a55a0b7fc85ad26c50\` (\`companyId\`), PRIMARY KEY (\`departmentId\`, \`companyId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`city\` ADD CONSTRAINT \`FK_b521beb35f9ee467ec090f82a44\` FOREIGN KEY (\`idStateId\`) REFERENCES \`state\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bank_analysis\` ADD CONSTRAINT \`FK_5d95067d5291d6d3ba1e022d6d2\` FOREIGN KEY (\`idBankId\`) REFERENCES \`bank_company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service_analysis\` ADD CONSTRAINT \`FK_111314ee884125f55d81c03e4f9\` FOREIGN KEY (\`idServiceId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_card\` ADD CONSTRAINT \`FK_ccab6397bba0431eee53676821b\` FOREIGN KEY (\`idUserId\`) REFERENCES \`user_orm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_orm\` ADD CONSTRAINT \`FK_d72859a9bd83ffbe8a7cfac2986\` FOREIGN KEY (\`idBaseRegistrationId\`) REFERENCES \`base_registration\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_evalution\` ADD CONSTRAINT \`FK_dda7f5f1a38bc020843e5abb485\` FOREIGN KEY (\`idUserId\`) REFERENCES \`user_orm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_evalution\` ADD CONSTRAINT \`FK_ea968758e2596cf2ae6e47fc950\` FOREIGN KEY (\`idOrderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_evalution\` ADD CONSTRAINT \`FK_8e7639ca07c7ea5f2c5b095b7d2\` FOREIGN KEY (\`idServiceId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service\` ADD CONSTRAINT \`FK_50f274117e78439bd8c2253f4ef\` FOREIGN KEY (\`idDepartmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service\` ADD CONSTRAINT \`FK_27dac0f265e937203ae7e7ac16d\` FOREIGN KEY (\`idCompanyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_e83189c8f5d1b3ce1115b0b564c\` FOREIGN KEY (\`idBankCompanyId\`) REFERENCES \`bank_company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_19aad716b8ce7e12273a5cbfbf8\` FOREIGN KEY (\`idUserCardId\`) REFERENCES \`user_card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_7a392860e6bf72a2bf24b0116ad\` FOREIGN KEY (\`idUserId\`) REFERENCES \`user_orm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_0b2c044dc4b40a111fa69779240\` FOREIGN KEY (\`idServiceId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bank_company\` ADD CONSTRAINT \`FK_9a58c54561c57019b340dfcb520\` FOREIGN KEY (\`idCompanyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`platform_benefit\` ADD CONSTRAINT \`FK_ade76f50dec00a887f28ba950de\` FOREIGN KEY (\`idPlanId\`) REFERENCES \`platform_plan\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`company_status\` ADD CONSTRAINT \`FK_9c76d722e4cda20f0ed31122663\` FOREIGN KEY (\`idPlanId\`) REFERENCES \`platform_plan\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD CONSTRAINT \`FK_bebc6a5f842d39d3662af588609\` FOREIGN KEY (\`idBaseRegistrationId\`) REFERENCES \`base_registration\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD CONSTRAINT \`FK_d2c3c1c36411839c0a4f75e5399\` FOREIGN KEY (\`idStatusId\`) REFERENCES \`company_status\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`base_registration\` ADD CONSTRAINT \`FK_58d6fdcc6d60f75311043648613\` FOREIGN KEY (\`idAuthId\`) REFERENCES \`auth\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`base_registration\` ADD CONSTRAINT \`FK_985bb4c949c1bef6fcb098dff71\` FOREIGN KEY (\`idCityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department_companies_company\` ADD CONSTRAINT \`FK_32bb638e45771765a87fddbed36\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`department_companies_company\` ADD CONSTRAINT \`FK_a1a2cc88a55a0b7fc85ad26c506\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`department_companies_company\` DROP FOREIGN KEY \`FK_a1a2cc88a55a0b7fc85ad26c506\``);
        await queryRunner.query(`ALTER TABLE \`department_companies_company\` DROP FOREIGN KEY \`FK_32bb638e45771765a87fddbed36\``);
        await queryRunner.query(`ALTER TABLE \`base_registration\` DROP FOREIGN KEY \`FK_985bb4c949c1bef6fcb098dff71\``);
        await queryRunner.query(`ALTER TABLE \`base_registration\` DROP FOREIGN KEY \`FK_58d6fdcc6d60f75311043648613\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP FOREIGN KEY \`FK_d2c3c1c36411839c0a4f75e5399\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP FOREIGN KEY \`FK_bebc6a5f842d39d3662af588609\``);
        await queryRunner.query(`ALTER TABLE \`company_status\` DROP FOREIGN KEY \`FK_9c76d722e4cda20f0ed31122663\``);
        await queryRunner.query(`ALTER TABLE \`platform_benefit\` DROP FOREIGN KEY \`FK_ade76f50dec00a887f28ba950de\``);
        await queryRunner.query(`ALTER TABLE \`bank_company\` DROP FOREIGN KEY \`FK_9a58c54561c57019b340dfcb520\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_0b2c044dc4b40a111fa69779240\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_7a392860e6bf72a2bf24b0116ad\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_19aad716b8ce7e12273a5cbfbf8\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_e83189c8f5d1b3ce1115b0b564c\``);
        await queryRunner.query(`ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_27dac0f265e937203ae7e7ac16d\``);
        await queryRunner.query(`ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_50f274117e78439bd8c2253f4ef\``);
        await queryRunner.query(`ALTER TABLE \`order_evalution\` DROP FOREIGN KEY \`FK_8e7639ca07c7ea5f2c5b095b7d2\``);
        await queryRunner.query(`ALTER TABLE \`order_evalution\` DROP FOREIGN KEY \`FK_ea968758e2596cf2ae6e47fc950\``);
        await queryRunner.query(`ALTER TABLE \`order_evalution\` DROP FOREIGN KEY \`FK_dda7f5f1a38bc020843e5abb485\``);
        await queryRunner.query(`ALTER TABLE \`user_orm\` DROP FOREIGN KEY \`FK_d72859a9bd83ffbe8a7cfac2986\``);
        await queryRunner.query(`ALTER TABLE \`user_card\` DROP FOREIGN KEY \`FK_ccab6397bba0431eee53676821b\``);
        await queryRunner.query(`ALTER TABLE \`service_analysis\` DROP FOREIGN KEY \`FK_111314ee884125f55d81c03e4f9\``);
        await queryRunner.query(`ALTER TABLE \`bank_analysis\` DROP FOREIGN KEY \`FK_5d95067d5291d6d3ba1e022d6d2\``);
        await queryRunner.query(`ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_b521beb35f9ee467ec090f82a44\``);
        await queryRunner.query(`DROP INDEX \`IDX_a1a2cc88a55a0b7fc85ad26c50\` ON \`department_companies_company\``);
        await queryRunner.query(`DROP INDEX \`IDX_32bb638e45771765a87fddbed3\` ON \`department_companies_company\``);
        await queryRunner.query(`DROP TABLE \`department_companies_company\``);
        await queryRunner.query(`DROP TABLE \`company_department\``);
        await queryRunner.query(`DROP TABLE \`auth\``);
        await queryRunner.query(`DROP INDEX \`REL_58d6fdcc6d60f7531104364861\` ON \`base_registration\``);
        await queryRunner.query(`DROP TABLE \`base_registration\``);
        await queryRunner.query(`DROP INDEX \`REL_d2c3c1c36411839c0a4f75e539\` ON \`company\``);
        await queryRunner.query(`DROP INDEX \`REL_bebc6a5f842d39d3662af58860\` ON \`company\``);
        await queryRunner.query(`DROP TABLE \`company\``);
        await queryRunner.query(`DROP TABLE \`company_status\``);
        await queryRunner.query(`DROP TABLE \`platform_plan\``);
        await queryRunner.query(`DROP TABLE \`platform_benefit\``);
        await queryRunner.query(`DROP TABLE \`bank_company\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP TABLE \`order_evalution\``);
        await queryRunner.query(`DROP INDEX \`REL_d72859a9bd83ffbe8a7cfac298\` ON \`user_orm\``);
        await queryRunner.query(`DROP TABLE \`user_orm\``);
        await queryRunner.query(`DROP TABLE \`user_card\``);
        await queryRunner.query(`DROP TABLE \`department\``);
        await queryRunner.query(`DROP TABLE \`service_analysis\``);
        await queryRunner.query(`DROP TABLE \`bank_analysis\``);
        await queryRunner.query(`DROP TABLE \`city\``);
        await queryRunner.query(`DROP TABLE \`state\``);
    }

}
