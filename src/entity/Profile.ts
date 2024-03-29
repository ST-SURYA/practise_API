import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_profile' })
export class profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  dob: string;
}
