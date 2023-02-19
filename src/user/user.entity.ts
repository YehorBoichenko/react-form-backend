import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({nullable: true})
	name: string;

   @Column({default: ''})
	email: string;

   @Column({default: ''})
	message: string;

}