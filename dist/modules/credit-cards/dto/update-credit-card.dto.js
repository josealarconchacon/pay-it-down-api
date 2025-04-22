"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCreditCardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_credit_card_dto_1 = require("./create-credit-card.dto");
class UpdateCreditCardDto extends (0, mapped_types_1.PartialType)(create_credit_card_dto_1.CreateCreditCardDto) {
}
exports.UpdateCreditCardDto = UpdateCreditCardDto;
//# sourceMappingURL=update-credit-card.dto.js.map