import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {

    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'farrealms',
        user: 'postgres',
        password: 'postgres',
        type: 'postgresql',
        debug: !__prod__
    });

    console.log("hello world")
}

main()
