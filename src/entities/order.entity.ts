import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    cliente!: string;

    @Column("decimal")
    total!: number;
}