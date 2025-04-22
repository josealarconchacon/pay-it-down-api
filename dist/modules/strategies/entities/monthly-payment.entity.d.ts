import { PaymentStrategy } from "./payment-strategy.entity";
export declare class MonthlyPayment {
    id: string;
    paymentStrategyId: string;
    paymentStrategy: PaymentStrategy;
    paymentDate: Date;
    amount: number;
    principal: number;
    interest: number;
    remainingBalance: number;
    createdAt: Date;
}
