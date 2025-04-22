import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { MonthlyPayment } from "./monthly-payment.entity";

@Entity("payment_strategies")
export class PaymentStrategy {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid", nullable: true })
  userId: string;

  @ManyToOne(() => User, { nullable: true })
  user: User;

  @Column({ length: 50 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column("decimal", { precision: 12, scale: 2 })
  monthlyPayment: number;

  @Column("decimal", { precision: 12, scale: 2 })
  totalInterestPaid: number;

  @Column("date")
  payoffDate: Date;

  @OneToMany(
    () => MonthlyPayment,
    (monthlyPayment) => monthlyPayment.paymentStrategy
  )
  monthlyPayments: MonthlyPayment[];

  @CreateDateColumn()
  createdAt: Date;
}
