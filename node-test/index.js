
const { connection } = require("./connection");
const { User } = require("./model/User");

async function init() {
 connection();
 const vishal=await User.create({
  firstName:"Vishal",
  lastName:"Chauhan"
 })
 return vishal
}

init();