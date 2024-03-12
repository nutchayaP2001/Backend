import { Sequelize } from "sequelize";

const db = new Sequelize(
    'project_bestphoto',
    'root', 
    '',{
    host: 'databasebestphoto.c9yu82aes6g1.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql'
});

export default db;

