require("dotenv").config();

db_url = `mongodb+srv://sankar4595:Sankar4595@cluster0.ywaztpc.mongodb.net/${process.env.DB_NAME}`;

module.exports = { db_url };
