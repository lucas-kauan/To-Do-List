
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { User } from "./user.entity"

@Entity("tasks")
export class Tasks {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, (user) => user.tasks, {eager: true})
    user: User

}
