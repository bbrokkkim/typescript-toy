import bcrypt from "bcrypt";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  ManyToOne
} from "typeorm";
import User from "../user/User";

@Entity()
class Post extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "varchar", unique: true, nullable: true })
  title: string;

  @Column({ type: "text" })
  desc: string;

  @ManyToOne(
    type => User,
    user => user.posts
  )
  user: User;

}

export default Post;