import { Topic } from 'src/entites/topic.entity';
import { User } from 'src/entites/user.entity';
import { Comment } from 'src/entites/comment.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, Comment, Topic],
  synchronize: true,
};

export default config;
