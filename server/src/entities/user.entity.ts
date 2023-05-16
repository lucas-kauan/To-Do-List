import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, BeforeInsert, OneToMany } from "typeorm"
import { hashSync } from "bcryptjs"
import { Tasks } from "./tasks.entity"

@Entity("user")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany(() => Tasks, (tasks) => tasks.user)
    tasks: Tasks[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }

}
