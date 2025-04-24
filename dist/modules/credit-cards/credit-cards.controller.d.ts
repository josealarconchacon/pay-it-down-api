import { CreditCardsService } from "./credit-cards.service";
import { CreateCreditCardDto } from "./dto/create-credit-card.dto";
import { UpdateCreditCardDto } from "./dto/update-credit-card.dto";
export declare class CreditCardsController {
    private readonly creditCardsService;
    constructor(creditCardsService: CreditCardsService);
    create(createCreditCardDto: CreateCreditCardDto): Promise<import("./entities/credit-card.entity").CreditCard>;
    findAll(): Promise<import("./entities/credit-card.entity").CreditCard[]>;
    findOne(id: string): Promise<import("./entities/credit-card.entity").CreditCard>;
    update(id: string, updateCreditCardDto: UpdateCreditCardDto): Promise<import("./entities/credit-card.entity").CreditCard>;
    updateWithPut(id: string, updateCreditCardDto: UpdateCreditCardDto): Promise<import("./entities/credit-card.entity").CreditCard>;
    remove(id: string): Promise<void>;
}
