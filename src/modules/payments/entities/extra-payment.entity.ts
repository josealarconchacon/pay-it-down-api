import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { CreditCard } from "../../credit-cards/entities/credit-card.entity";

@Entity("extra_payments")
export class ExtraPayment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  creditCardId: string;

  @ManyToOne(() => CreditCard, (creditCard) => creditCard.extraPayments)
  creditCard: CreditCard;

  @Column("decimal", { precision: 12, scale: 2 })
  amount: number;

  @Column("date")
  paymentDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
