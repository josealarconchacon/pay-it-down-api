import { CreditCard } from "../../credit-cards/entities/credit-card.entity";
export declare class ExtraPayment {
    id: string;
    creditCardId: string;
    creditCard: CreditCard;
    amount: number;
    paymentDate: Date;
    createdAt: Date;
}
