import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

import {Common} from './Common';

@Entity('t_todos')
export class Todo extends Common {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  done: boolean;
}
