//Configuração do bando de dados no ambiente de teste
export const databaseConfigSQLite = {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
        timestamps: true,
        freezeTableName: true,
        underscored: true
    }
};




// Configuração do bando de dados no ambiente de produção
export const databaseConfigPostgres = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};


export const databaseConfigRender = {        
  dialect: 'postgres',
  host: 'dpg-ci65a7enqql3q38degpg-a.oregon-postgres.render.com',
  username: 'dtsc_node_sequelize_user',
  password: 'u8c3Tpp0bLm2g19bTIvJnxAguEoeYPCl',
  database: 'dtsc_node_sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};

//postgres://USER:PASSWORD@EXTERNAL_HOST:PORT/DATABASE
