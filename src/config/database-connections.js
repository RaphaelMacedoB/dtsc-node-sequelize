import { Sequelize } from "sequelize";
import { databaseConfig } from "./database-config.js";

import { Uf } from "../models/Uf.js";
import { City } from "../models/City.js";
import { District } from "../models/District.js";

const sequelize = new Sequelize(databaseConfig)
Uf.init(sequelize)
City.init(sequelize)
District.init(sequelize)

databaseInserts();

function databaseInserts() {
    (async() => {
        await sequelize.sync({ force: true })
        const city1 = await City.create({ name: "Rio de Janeiro" })
        console.log(city1.name);
    })();
}

export default sequelize;