import {Column, CreateDateColumn} from 'typeorm';

export class Common {
  @Column({name: 'is_enabled'})
  isEnabled: boolean;

  @Column({name: 'is_deleted'})
  isDeleted: boolean;

  @CreateDateColumn({name: 'created_at'})
  readonly createdAt?: Date;

  @CreateDateColumn({name: 'updated_at'})
  readonly updatedAt?: Date;
}
