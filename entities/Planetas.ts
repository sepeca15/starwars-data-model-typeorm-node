import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';

import {Favoritos} from "./Favortios"
  
  @Entity()
  export class Planetas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    altura: string;

    @Column()
    peso: string;

    @Column()
    color_de_pelo: string;
  
    @Column()
    color_de_piel: string;

    @Column()
    color_de_ojo: string;

    @Column()
    fecha_nacimiento: string;
  
    @Column()
    genero: string;

    @Column()
    descripcion: string;

    @Column()
    img_url: string;
  
    
  }