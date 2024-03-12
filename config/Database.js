import { Sequelize } from "sequelize";
dotenv.config();

const db = new Sequelize(
    'project_bestphoto',
    'root', 
    '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;

