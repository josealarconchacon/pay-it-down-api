import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { PaymentStrategy } from "./payment-strategy.entity";

@Entity("monthly_payments")
export class MonthlyPayment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  paymentStrategyId: string;

  @ManyToOne(
    () => PaymentStrategy,
    (paymentStrategy) => paymentStrategy.monthlyPayments
  )
  paymentStrategy: PaymentStrategy;

  @Column("date")
  paymentDate: Date;

  @Column("decimal", { precision: 12, scale: 2 })
  amount: number;

  @Column("decimal", { precision: 12, scale: 2 })
  principal: number;

  @Column("decimal", { precision: 12, scale: 2 })
  interest: number;

  @Column("decimal", { precision: 12, scale: 2 })
  remainingBalance: number;

  @CreateDateColumn()
  createdAt: Date;
}
