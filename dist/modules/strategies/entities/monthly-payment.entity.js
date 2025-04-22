"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyPayment = void 0;
const typeorm_1 = require("typeorm");
const payment_strategy_entity_1 = require("./payment-strategy.entity");
let MonthlyPayment = class MonthlyPayment {
};
exports.MonthlyPayment = MonthlyPayment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MonthlyPayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], MonthlyPayment.prototype, "paymentStrategyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_strategy_entity_1.PaymentStrategy, (paymentStrategy) => paymentStrategy.monthlyPayments),
    __metadata("design:type", payment_strategy_entity_1.PaymentStrategy)
], MonthlyPayment.prototype, "paymentStrategy", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], MonthlyPayment.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], MonthlyPayment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], MonthlyPayment.prototype, "principal", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], MonthlyPayment.prototype, "interest", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], MonthlyPayment.prototype, "remainingBalance", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MonthlyPayment.prototype, "createdAt", void 0);
exports.MonthlyPayment = MonthlyPayment = __decorate([
    (0, typeorm_1.Entity)("monthly_payments")
], MonthlyPayment);
//# sourceMappingURL=monthly-payment.entity.js.map