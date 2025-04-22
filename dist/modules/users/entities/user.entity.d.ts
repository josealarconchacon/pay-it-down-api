import { CreditCard } from "../../credit-cards/entities/credit-card.entity";
export declare class User {
    id: string;
    email: string;
    creditCards: CreditCard[];
    createdAt: Date;
    updatedAt: Date;
}
