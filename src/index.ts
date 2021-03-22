import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, { title: 'my first post' });
  await orm.em.persistAndFlush(post);
  //await orm.em.nativeInsert(Post, {'my first post 2'})

  console.log('hello world');
};

main().catch((err) => {
  console.error(err);
});
