const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize=new Sequelize("postgresql://neondb_owner:npg_SaDrqFCgZG89@ep-black-dream-a10fcz0y-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
    {
        dialect:"postgres"
    }
)

async function  connection (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports={connection,sequelize}