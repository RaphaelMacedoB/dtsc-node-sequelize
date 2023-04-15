import { Sequelize } from "sequelize";
import { databaseConfig } from "./database-config.js";

import { Uf } from "../models/Uf.js";
import { City } from "../models/City.js";
import { District } from "../models/District.js";
import { Tutor } from "../models/Tutor.js"
import { DogSize } from "../models/DogSize.js";
import { Breed } from "../models/Breed.js";
import { Vaccine } from "../models/Vaccine.js";
import { TypeOfOccurrence } from "../models/TypeOfOccurrence.js";
const sequelize = new Sequelize(databaseConfig)

Uf.init(sequelize)
City.init(sequelize)
District.init(sequelize)
Tutor.init(sequelize)
DogSize.init(sequelize)
Breed.init(sequelize)
Vaccine.init(sequelize)
TypeOfOccurrence.init(sequelize)

Uf.associate(sequelize.models);
City.associate(sequelize.models);
District.associate(sequelize.models);
Tutor.associate(sequelize.models)
DogSize.associate(sequelize.models)
Breed.associate(sequelize.models)
Vaccine.associate(sequelize.models)
TypeOfOccurrence.associate(sequelize.models)

databaseInserts();


function databaseInserts() {
    (async() => {
        await sequelize.sync({ force: true })
        const uf1 = await Uf.create({ sigla: "ES", name: "Espírito Santo" });
        const uf2 = await Uf.create({ sigla: "MG", name: "Minas Gerais" });

        const cidade1 = await City.create({ name: "Cachoeiro", ufId: 1 });
        const cidade2 = await City.create({ name: "Alegre", ufId: 1 });
        const cidade3 = await City.create({ name: "Belo Horizonte", ufId: 2 });
        const cidade4 = await City.create({ name: "Lavras", ufId: 2 });

        const bairro1 = await District.create({ name: "Vila do Sul", cityId: 1 });
        const bairro2 = await District.create({ name: "Guararema", cityId: 1 });
        const bairro3 = await District.create({ name: "Maria Ortiz", cityId: 2 });
        const bairro4 = await District.create({ name: "Centro", cityId: 2 });

        const tutor1 = await Tutor.create({ name: "Lucas Macedo Bernardino", house_number: "108", zip_code: "29.307-195", email: "lucasmacedoes@gmail.com", phone: "(28)99930-4053", public_place: "Aceito", date_of_birth: "2000/03/28", space_size: "500", districtId: 2 })
        const tutor2 = await Tutor.create({ name: "Raphael Macedo Bernardino", house_number: "108", zip_code: "29.307-195", email: "faeldojo@gmail.com", phone: "(28)99916-2116", public_place: "Aceito", date_of_birth: "2000/03/28", space_size: "500", districtId: 2 })
        const tutor3 = await Tutor.create({ name: "Jefferson Abreu", house_number: "49", zip_code: "29.307-125", email: "download10@gmail.com", phone: "(28)99914-4651", public_place: "Aceito", date_of_birth: "1980/02/14", space_size: "650", districtId: 1 })
        const tutor4 = await Tutor.create({ name: "Jonatas Silva Bernardino", house_number: "108", zip_code: "29.307-195", email: "jobernardino0@gmail.com", phone: "(28)99919-0497", public_place: "Aceito", date_of_birth: "1979/04/14", space_size: "650", districtId: 3 })

        const dogsize1 = await DogSize.create({
            name: "mini",
            occupied_size: "10"
        })
        const dogsize2 = await DogSize.create({
            name: "pequeno",
            occupied_size: "15"
        })
        const dogsize3 = await DogSize.create({
            name: "medio",
            occupied_size: "30"
        })
        const dogsize4 = await DogSize.create({
            name: "grande",
            occupied_size: "50"
        })
        const dogsize5 = await DogSize.create({
            name: "gigante",
            occupied_size: "100"
        })

        const breed1 = await Breed.create({ name: "Dogue alemão", dogSizeId: 3 })
        const breed2 = await Breed.create({ name: "Golden retriever", dogSizeId: 5 })
        const breed3 = await Breed.create({ name: "Husky siberiano", dogSizeId: 3 })
        const breed4 = await Breed.create({ name: "Bull Terrier", dogSizeId: 3 })

        const vaccine1breed1 = await Vaccine.create({ name: "AHS82", dosage_interval_days: "3", breedId: 1 })
        const vaccine1breed2 = await Vaccine.create({ name: "DJGH21", dosage_interval_days: "4", breedId: 1 })
        const vaccine2breed1 = await Vaccine.create({ name: "WYRT0", dosage_interval_days: "5", breedId: 2 })
        const vaccine3breed3 = await Vaccine.create({ name: "ADFH23", dosage_interval_days: "2", breedId: 3 })

        const typeofoccurrence1 = await TypeOfOccurrence.create({
            name: "Pata quebrada",
            severity: 0.1,
            aggressor: true
        })
        const typeofoccurrence2 = await TypeOfOccurrence.create({
            name: "Ataque fuminante",
            severity: 1.0,
            aggressor: false
        })
        const typeofoccurrence3 = await TypeOfOccurrence.create({
            name: "Ataque ao morador",
            severity: 0.5,
            aggressor: true
        })
        const typeofoccurrence4 = await TypeOfOccurrence.create({
            name: "Atropelamento",
            severity: 0.9,
            aggressor: false
        })


    })();
}

export default sequelize;