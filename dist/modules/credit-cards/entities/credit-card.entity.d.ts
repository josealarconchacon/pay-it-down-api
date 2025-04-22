import { User } from "../../users/entities/user.entity";
import { ExtraPayment } from "../../payments/entities/extra-payment.entity";
export declare class CreditCard {
    id: string;
    userId: string;
    user: User;
    name: string;
    balance: number;
    apr: number;
    minimumPayment: number;
    dueDate: Date;
    lateFee: number;
    extraPayments: ExtraPayment[];
    createdAt: Date;
    updatedAt: Date;
}
