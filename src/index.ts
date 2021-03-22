import { MikroORM } from "@mikro-orm/core";

const orm = await MikroORM.init();

console.log("hello world")