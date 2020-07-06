import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Lesson from './Lessons';

@Entity('class') //isso se chama decorator / anotação
//esse entity sinaliza que CLASS é uma ENTIDADE do BANCO DE DADOS

//no MIGRATION SE CRIOU A TABELA, AQUI VAMOS CRIAR AS COLUNAS
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @OneToMany(type => Lesson, classe => Class)
  lessons: Lesson[]

  @Column()
  duration: number;

  @CreateDateColumn({ name: 'created_At'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At'})
  updatedAt: Date;
}
