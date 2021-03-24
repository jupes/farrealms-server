import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';
import { User } from "./entities/User";

export default {
  migrations: {
    //tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: path.join(__dirname, './migrations') , // path to the folder with migrations, the join with the dirname ensures we point to the right path. It is a special variable that is the absolute path to the place from which it is called
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files, modified to looks for js or ts 
    // transactional: true, // wrap each migration in a transaction
    // disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    // allOrNothing: true, // wrap all migrations in master transaction
    // dropTables: true, // allow to disable table dropping
    // safe: false, // allow to disable table and column dropping
    // emit: 'ts', // migration generation mode
  },
  entities: [Post, User],
  dbName: 'farrealms',
  user: 'postgres',
  password: 'postgres',
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
// The Parameters is special to typescript and helps make the type line up, 
// using the mikroorm.init I can get autocomplete as the block realizes it is based on that function

