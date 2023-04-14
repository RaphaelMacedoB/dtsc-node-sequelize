import { Sequelize } from "sequelize";
import { databaseConfig } from "./database-config.js";

import { Uf } from "../models/Uf.js";
import { City } from "../models/City.js";
import { District } from "../models/District.js";
import { Tutor } from "../models/Tutor.js"
const sequelize = new Sequelize(databaseConfig)
Uf.init(sequelize)
City.init(sequelize)
District.init(sequelize)
Tutor.init(sequelize)
databaseInserts();

function databaseInserts() {
    (async() => {
        await sequelize.sync({ force: true })
        const tutor1 = await Tutor.create({ name: "Lucas Macedo", house_number: "10" })
        console.log(`Sou ${tutor1.name} e moro na casa de número ${tutor1.house_number}`);
    })();
}

export default sequelize;