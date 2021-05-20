import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';
  
  // import {Planet} from "./Planet"
  @Entity()
  export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    user_name: string;
  
    @Column()
    name: string;

    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column()
    password: string;
  
    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];
    
  }