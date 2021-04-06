import {
  Field,
  InputType
} from 'type-graphql';

// Input types are used for arguments

@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
