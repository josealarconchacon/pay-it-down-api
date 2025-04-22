import { User } from "../../users/entities/user.entity";
import { MonthlyPayment } from "./monthly-payment.entity";
export declare class PaymentStrategy {
    id: string;
    userId: string;
    user: User;
    name: string;
    description: string;
    monthlyPayment: number;
    totalInterestPaid: number;
    payoffDate: Date;
    monthlyPayments: MonthlyPayment[];
    createdAt: Date;
}
