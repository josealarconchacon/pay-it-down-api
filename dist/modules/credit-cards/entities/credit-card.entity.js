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
exports.CreditCard = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const extra_payment_entity_1 = require("../../payments/entities/extra-payment.entity");
let CreditCard = class CreditCard {
};
exports.CreditCard = CreditCard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CreditCard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], CreditCard.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], CreditCard.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreditCard.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], CreditCard.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], CreditCard.prototype, "apr", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], CreditCard.prototype, "minimumPayment", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], CreditCard.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], CreditCard.prototype, "lateFee", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => extra_payment_entity_1.ExtraPayment, (extraPayment) => extraPayment.creditCard),
    __metadata("design:type", Array)
], CreditCard.prototype, "extraPayments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CreditCard.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CreditCard.prototype, "updatedAt", void 0);
exports.CreditCard = CreditCard = __decorate([
    (0, typeorm_1.Entity)("credit_cards")
], CreditCard);
//# sourceMappingURL=credit-card.entity.js.map