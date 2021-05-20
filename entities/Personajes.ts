import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';
  
  // import {Planet} from "./Planet"
  @Entity()
  export class Personajes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    diametro: string;

    @Column()
    periodo_de_rotacion: string;

    @Column()
    periodo_orbital: string;

    @Column()
    gravedad: string;

    @Column()
    poblacion: string;

    @Column()
    clima: string;

    @Column()
    terreno: string;

    @Column()
    agua_en_la_superficie: string;

    @Column()
    img_url: string;
    
  
    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];
    
  }