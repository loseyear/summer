import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, zerofill: true })
  id!: number;

  @Column({ type: 'varchar', length: 32, collation: 'utf8mb4_unicode_ci' })
  username!: string;

  @Column({ type: 'varchar', length: 32, collation: 'utf8mb4_unicode_ci' })
  password!: string;

  @Column({ type: 'varchar', length: 32, collation: 'utf8mb4_unicode_ci' })
  solt!: string;

  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  create_time!: Date;

  @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  update_time!: Date;
}

