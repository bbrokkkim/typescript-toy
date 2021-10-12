import bcrypt from "bcrypt";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import Post from "../post/Post";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "varchar", unique: true, nullable: true })
  username: string;

  @Column({ type: "varchar" })
  nickname: string;

  @Column({ type: "text", nullable: true })
  password: string;

  @OneToMany(
    type => Post,
    post => post.user
  )
  posts?: Post[];

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

}

export default User;