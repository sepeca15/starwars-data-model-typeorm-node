import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';
  
  // import {Planet} from "./Planet"
  @Entity()
  export class Favoritos extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];
    
  }