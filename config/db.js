import Sequelize from "sequelize";

 const db = new Sequelize("AgenciaViajesLatino", "root", "rootroot", {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:1000
    },
    operatorAliases: false
 });

 export default db;