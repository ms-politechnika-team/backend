
import { Entity, Column, Repository, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";
import { v4 } from "uuid";


@Entity()
export class Post extends Repository<Post> {
    public static create(post:Partial<Post>){
        const entity = new Post()
        const createdAt = new Date()
        Object.assign(entity, {...post, createdAt})
        return entity
    }

    @PrimaryColumn("uuid", {default: v4()})
    id: number;

    @ManyToOne(type=> User, user=>user.posts)
    user: User;

    @Column()
    fileUrl: string;

    @Column({length:1000})
    comment: string

    @Column()
    createdAt: Date;
}