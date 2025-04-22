"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const credit_cards_service_1 = require("./credit-cards.service");
const credit_cards_controller_1 = require("./credit-cards.controller");
const credit_card_entity_1 = require("./entities/credit-card.entity");
let CreditCardsModule = class CreditCardsModule {
};
exports.CreditCardsModule = CreditCardsModule;
exports.CreditCardsModule = CreditCardsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([credit_card_entity_1.CreditCard])],
        controllers: [credit_cards_controller_1.CreditCardsController],
        providers: [credit_cards_service_1.CreditCardsService],
        exports: [credit_cards_service_1.CreditCardsService],
    })
], CreditCardsModule);
//# sourceMappingURL=credit-cards.module.js.map