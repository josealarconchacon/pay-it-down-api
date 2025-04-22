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
exports.ExtraPayment = void 0;
const typeorm_1 = require("typeorm");
const credit_card_entity_1 = require("../../credit-cards/entities/credit-card.entity");
let ExtraPayment = class ExtraPayment {
};
exports.ExtraPayment = ExtraPayment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ExtraPayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], ExtraPayment.prototype, "creditCardId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => credit_card_entity_1.CreditCard, (creditCard) => creditCard.extraPayments),
    __metadata("design:type", credit_card_entity_1.CreditCard)
], ExtraPayment.prototype, "creditCard", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], ExtraPayment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ExtraPayment.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ExtraPayment.prototype, "createdAt", void 0);
exports.ExtraPayment = ExtraPayment = __decorate([
    (0, typeorm_1.Entity)("extra_payments")
], ExtraPayment);
//# sourceMappingURL=extra-payment.entity.js.map