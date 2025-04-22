import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { ExtraPayment } from "../../payments/entities/extra-payment.entity";

@Entity("credit_cards")
export class CreditCard {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid", nullable: true })
  userId: string;

  @ManyToOne(() => User, { nullable: true })
  user: User;

  @Column()
  name: string;

  @Column("decimal", { precision: 12, scale: 2 })
  balance: number;

  @Column("decimal", { precision: 5, scale: 2 })
  apr: number;

  @Column("decimal", { precision: 12, scale: 2 })
  minimumPayment: number;

  @Column("date")
  dueDate: Date;

  @Column("decimal", { precision: 12, scale: 2 })
  lateFee: number;

  @OneToMany(() => ExtraPayment, (extraPayment) => extraPayment.creditCard)
  extraPayments: ExtraPayment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
