const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const User=new sequelize.define('User',{
     firstName:{
        type:DataTypes.STRING,
        allowNull:false
     },
     lastName:{
        type:DataTypes.STRING

     }
},
{
    tableName:'users',
    timestamps:true
 })

 module.exports=User